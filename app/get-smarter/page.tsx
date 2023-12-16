"use client";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { ToastContainer, toast, Slide } from "react-toastify";

import ConnectionCard from "./_partial/ConnectionCard";
import FilterTabs from "./_partial/FilterTabs";
import Video from "./_partial/Video";
import VideoSkeleton from "../components/VideoSkeleton";
import InfiniteScroll from "../components/InfiniteScroll";

import "react-toastify/dist/ReactToastify.css";
import ToastIcon from "../components/ToastIcon";
import { getSubmissions, pageLoad } from "../api";

const FIRST_FETCH = 21;
const VIDEOS_TO_FETCH = 9;

export default function GetSmarter() {
    const { data: session, status } = useSession();
    const [connected, setConnected] = useState(false);
    const [submissions, setSubmissions] = useState<any>([]);
    const [selectedVideo, setSelectedVideo] = useState(-1);
    const [isFetching, setIsFetching] = useState(false);
    const cursorRef = useRef(-1);
    const [params, setParams] = useState({
        action: "PAGE LOAD",
        urlParams: {
            limit: FIRST_FETCH,
            cursor: -1,
            minDuration: 0,
            maxDuration: 0,
        },
    });

    const updateParams = () => {
        setIsFetching(true)
        setParams({
            action: "UPDATE",
            urlParams: {
                ...params.urlParams,
                limit: VIDEOS_TO_FETCH,
                cursor: cursorRef.current,
            },
        });
    }

    const updateIsFetching = (v: boolean) => {
        setIsFetching(v)
        console.log(v)
    }

    const fetchData = async () => {
        try {
            const response = await getSubmissions(cursorRef.current);
            const { submissionsList, cursor } = await response.json();
            cursorRef.current = cursor;
            setSubmissions([...submissions, ...submissionsList]);
        } catch (error) {
            console.error(`${error} Could not Fetch Data `);
        }
    };

    const handleSelectVideo = (id: number) => {
        setSelectedVideo(id);
    };

    useEffect(() => {
        pageLoad().then((resp) => (resp.json())).then((data) => {
            setSubmissions(data.submissionsList);
            cursorRef.current = data.cursor
            setConnected(true)
        })
    }, []);

    useEffect(() => {
        if (connected) {
            fetchData();
        }
    }, [params]);

    if (!connected) return <p>loading..</p>

    return (
        <div className="flex items-start max-w-screen min-h-screen">
            <div className="w-3/4 flex flex-wrap p-4">
                <InfiniteScroll next={updateParams} setFetching={updateIsFetching}>
                    {submissions.map((submission: any, index: number) => (
                        <Video
                            key={index}
                            isActive={selectedVideo === submission.id}
                            submission={submission}
                            handleSelectVideo={handleSelectVideo}
                        />
                    ))}
                </InfiniteScroll>
            </div>
            <div className="fixed right-0 bottom-0 flex flex-col justify-end items-center gap-6 flex-shrink-0 w-1/4 p-4 pl-0">
                {/* <FilterTabs handleFilter={handleFilter} /> */}
                <p>{isFetching ? "fetching" : "not fetching"}</p>
                <ConnectionCard
                    username={session?.user?.name!}
                    connected={connected}
                />
            </div>
        </div>
    );
}

