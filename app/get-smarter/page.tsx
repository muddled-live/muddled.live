"use client";

import { useEffect, useRef, useState } from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import { ToastContainer, toast, Slide } from "react-toastify";


import ConnectionCard from "./_partial/ConnectionCard";
import FilterTabs from "./_partial/FilterTabs";
import Video from "./_partial/Video";
import VideoSkeleton from "../_shared/VideoSkeleton";
import Loader from "../_shared/Loader";
import InfiniteScroll from "../components/InfiniteScroll";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const FIRST_FETCH = 21;
const VIDEOS_TO_FETCH = 9;

function addExtraFields(submissionsList: any): any {
    return submissionsList.map((obj: any) => ({
        ...obj,
        isMuted: false,
    }));
}

export default function GetSmarter() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/");
        },
    });
    const [connected, setConnected] = useState(false);
    const [action, setAction] = useState("load");

    const [params, setParams] = useState({
        action: "PAGE LOAD",
        urlParams: {
            limit: FIRST_FETCH,
            cursor: -1,
            minDuration: 0,
            maxDuration: 0,
        },
    });
    const [submissions, setSubmissions] = useState<any>([]);
    const [selectedVideo, setSelectedVideo] = useState(-1);
    const cursorRef = useRef(-1);
    const firstCursorRef = useRef(-1);

    const notify = (bold: string, message: string) => {
        return (
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
            )
        )
    }

    const fetchData = async () => {
        try {
            const query = new URLSearchParams();
            Object.entries(params.urlParams).forEach(([k, v]) =>
                query.set(k, v.toString()),
            );
            const response = await fetch("/api/submissions?" + query);
            const { submissionsList, cursor } = await response.json();
            console.log(submissionsList)

            const newSubmissions = addExtraFields(submissionsList);

            if (firstCursorRef.current = -1) {
                firstCursorRef.current = cursor
            }
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


    const updateParams = () => {
        setParams({
            action: "UPDATE",
            urlParams: {
                ...params.urlParams,
                limit: VIDEOS_TO_FETCH,
                cursor: 0,
            },
        });
    }

    const handleFilter = (min: number, max: number) => {
        setParams({
            action: "FILTER",
            urlParams: {
                limit: FIRST_FETCH,
                cursor: -1,
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

    useEffect(() => {
        if (connected) {
            fetchData();
        }
    }, [params]);

    useEffect(() => {
        fetch("/api/members/crimpsonsloper/load")
            .then((resp) => resp.json())
            .then((d) => {
                cursorRef.current = d.cursor
                if (!connected) setConnected(true);
                updateParams()
            })
    }, []);

    if (status === "loading") return <Loader />;
    return (
        <div className="flex items-start max-w-screen min-h-screen">
            <div className="w-3/4 flex flex-wrap p-4">
                <InfiniteScroll dataLength={submissions.length} next={updateParams}>
                    {submissions.map((submission: any, index: number) => (
                        <Video
                            key={index}
                            isActive={selectedVideo === submission.id}
                            submission={submission}
                            handleSelectVideo={handleSelectVideo}
                            handleMuteChatter={handleMuteChatter}
                            handleClickSave={notify}
                        />
                    ))}
                </InfiniteScroll>
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

