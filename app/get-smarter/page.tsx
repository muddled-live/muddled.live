"use client";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";

import { ToastContainer, toast, Slide } from "react-toastify";


import ConnectionCard from "./_partial/ConnectionCard";
import FilterTabs from "./_partial/FilterTabs";
import Video from "./_partial/Video";
import VideoSkeleton from "../components/VideoSkeleton";
import Loader from "../components/Loader";
import InfiniteScroll from "../components/InfiniteScroll";

import "react-toastify/dist/ReactToastify.css";
import ToastIcon from "../components/ToastIcon";

const FIRST_FETCH = 21;
const VIDEOS_TO_FETCH = 9;



function addExtraFields(submissionsList: any): any {
    return submissionsList.map((obj: any) => ({
        ...obj,
        isMuted: false,
    }));
}

export default function GetSmarter() {
    const { data: session, status } = useSession();
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

    const notify = (bold: string, message: string) => {
        return (
            toast.success(
                <p className="text-sm">
                    <strong>{bold}</strong> {message}
                </p>,
                {
                    className: "toast-success-container toast-success-container-after",
                    icon: <ToastIcon />,
                },
            )
        )
    }

    const fetchData = async () => {
        try {
            const response = await fetch("/api/submissions?cursor=" + cursorRef.current);
            const { submissionsList, cursor } = await response.json();
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


    const updateParams = () => {
        setParams({
            action: "UPDATE",
            urlParams: {
                ...params.urlParams,
                limit: VIDEOS_TO_FETCH,
                cursor: cursorRef.current,
            },
        });
    }

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
        fetch(`/api/members/${session?.user?.name}/load`)
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
                {/* <FilterTabs handleFilter={handleFilter} /> */}
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

