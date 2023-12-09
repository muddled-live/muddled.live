"use client";

import { useEffect, useRef, useState } from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
// LIBRARY COMPONENTS
import InfiniteScroll from "react-infinite-scroll-component";
import { ToastContainer, toast, Slide } from "react-toastify";
// TYPES
import { Submission as ISubmission } from "@/app/api/_internal/muddled/submissions_pb";
import { Submission, Submissions } from "@/app/api";

import ConnectionCard from "./_partial/ConnectionCard";
import FilterTabs from "./_partial/FilterTabs";
import EndMessage from "./_partial/EndMessage";
import Video from "./_partial/Video";
import VideoSkeleton from "../_shared/VideoSkeleton";

import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../_shared/Loader";

const FIRST_FETCH = 15;
const VIDEOS_TO_FETCH = 9;

function addExtraFields(submissionsList: ISubmission.AsObject[]): Submissions {
    return submissionsList.map((obj) => ({
        ...obj,
        isMuted: false,
    }));
}

function VideoLoader({ num }: { num: number }) {
    return Array(num).map((i) => <VideoSkeleton key={i} />);
}

export default function GetSmarter() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/");
        },
    });
    const [connected, setConnected] = useState(false);
    const [params, setParams] = useState({
        action: "PAGE LOAD",
        urlParams: {
            limit: FIRST_FETCH,
            cursor: 0, // USE LOCAL STORAGE IN PRODUCTION
            minDuration: 0,
            maxDuration: 0,
        },
    });
    const [submissions, setSubmissions] = useState<Submissions>([]);
    const [selectedVideo, setSelectedVideo] = useState(-1);
    const [hasMore, setHasMore] = useState(true);
    const [spamFetching, setSpamFetching] = useState(false);
    const cursorRef = useRef(0);

    const notify = (bold: string, message: string) =>
        toast.success(
            <p className="text-sm">
                <strong>{bold}</strong> {message}
            </p>,
            {
                className: "toast-success-container toast-success-container-after",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#7222C2"
                        className="w-8 h-8"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
        );

    const fetchData = async () => {
        try {
            const query = new URLSearchParams();
            Object.entries(params.urlParams).forEach(([k, v]) =>
                query.set(k, v.toString()),
            );
            const response = await fetch("/api/submissions?" + query);
            if (!connected) setConnected(true);
            const { submissionsList, cursor } = await response.json();
            if (submissionsList.length < VIDEOS_TO_FETCH && !spamFetching) {
                console.log("STARTING SPAM FETCH");
                setSpamFetching(true);
            } else if (submissionsList.length == VIDEOS_TO_FETCH && spamFetching) {
                console.log("ENDING SPAM FETCH");
                setSpamFetching(false);
            }
            console.log(submissionsList)

            const newSubmissions = addExtraFields(submissionsList);
            cursorRef.current = cursor;

            switch (params.action) {
                case "UPDATE":
                    setSubmissions([...submissions, ...newSubmissions]);
                    break;

                case "PAGE LOAD":
                    setSubmissions(newSubmissions);
                    break;

                default:
                    setSubmissions(newSubmissions);
                    break;
            }
        } catch (error) {
            console.error(`${error} Could not Fetch Data `);
        }
    };

    useEffect(() => {
        if (spamFetching) {
            const intervalId = setInterval(() => {
                setParams({
                    action: "UPDATE",
                    urlParams: {
                        ...params.urlParams,
                        limit: VIDEOS_TO_FETCH,
                        cursor: cursorRef.current,
                    },
                });
            }, 3000);
            return () => clearInterval(intervalId);
        }
    }, [spamFetching]);

    const updateCursor = () => {
        setParams({
            action: "UPDATE",
            urlParams: {
                ...params.urlParams,
                limit: VIDEOS_TO_FETCH,
                cursor: cursorRef.current,
            },
        });
    };

    const handleFilter = (min: number, max: number) => {
        window.scrollTo({ top: 0 });
        setParams({
            action: "FILTER",
            urlParams: {
                limit: FIRST_FETCH,
                cursor: 0,
                minDuration: min,
                maxDuration: max,
            },
        });
    };

    const handleMuteChatter = (username: string) => {
        notify(username, "has been muted");
        setSubmissions(
            [...submissions].map((vid) => {
                if (vid.sender === username) {
                    return { ...vid, isMuted: true };
                }
                return vid;
            }),
        );
    };

    const handleSelectVideo = (id: number) => {
        setSelectedVideo(id);
    };

    const handleClickEndMessage = () => {
        setParams({
            action: "UPDATE",
            urlParams: {
                ...params.urlParams,
                cursor: cursorRef.current,
            },
        });
    };

    useEffect(() => {
        fetchData();
    }, [params]);

    if (status === "loading") return <Loader />;
    return (
        <div className="flex items-start max-w-screen min-h-screen">
            <div className="w-3/4 flex flex-wrap p-4">
                {submissions.length > 0 ? (
                    <InfiniteScroll
                        dataLength={submissions.length}
                        next={updateCursor}
                        hasMore={hasMore}
                        loader={<VideoLoader num={9} />}
                        endMessage={
                            <EndMessage handleClickEndMessage={handleClickEndMessage} />
                        }
                    >
                        {submissions.map((submission: Submission, index: number) => (
                            <Video
                                key={index}
                                isActive={selectedVideo === submission.submissionId}
                                submission={submission}
                                handleSelectVideo={handleSelectVideo}
                                handleMuteChatter={handleMuteChatter}
                                handleClickSave={notify}
                            />
                        ))}
                    </InfiniteScroll>
                ) : (
                    <VideoSkeleton num={9} />
                )}
            </div>
            <div className="fixed right-0 bottom-0 flex flex-col justify-end items-center gap-6 flex-shrink-0 w-1/4 p-4 pl-0">
                <FilterTabs handleFilter={handleFilter} />
                <ConnectionCard
                    username={session?.user?.name!}
                    connected={connected}
                />
            </div>
            <ToastContainer
                position="bottom-left"
                transition={Slide}
                closeOnClick
                draggable={false}
                theme="light"
            />
        </div>
    );
}
