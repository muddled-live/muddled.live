"use client";

import { MouseEvent, useState, useEffect } from "react";
import {
    formatDuration,
    formatUploaded,
    formatViewsLikes,
} from "@/app/utils/utils";
import { Submission } from "@/app/api";
import SaveButton from "./SaveButton";
import ChatterChip from "./ChatterChip";
import VideoSkeleton from "@/app/_shared/VideoSkeleton";
import "./styles.css";

type VideoProps = {
    isActive: boolean;
    submission: Submission;
    handleMuteChatter: (user: string) => void;
    handleSelectVideo: (submissionId: number) => void;
    handleClickSave: (title: string, message: string) => void;
};

export default function Video({
    isActive,
    submission,
    handleMuteChatter,
    handleSelectVideo,
    handleClickSave,
}: VideoProps) {
    const {
        id,
        code,
        thumbnail,
        title,
        viewCount,
        likeCount,
        createdAt,
        duration,
        channelName,
        channelId,
        isLiked = false,
        submittedTo,
        submittedBy,
        isMuted = false
    } = submission!;

    const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
        setIframeLoaded(isActive);
    }, [isActive]);

    const handleClickThumbnail = (event: MouseEvent) => {
        event.preventDefault();
        handleSelectVideo(id);
    };

    const handleLoad = () => {
        setIframeLoaded(true);
    };

    const onClickSave = (saved: boolean) => {
        handleClickSave(title, `has been ${saved ? "" : "un"}liked`);
    };

    if (isMuted) return <VideoSkeleton />;
    return (
        <div className="sm:w-1/2 xl:w-1/3 2xl:w-1/4 h-full flex-col inline-flex justify-start items-start gap-1 p-2 mb-8">
            <div className={`w-full height-100 pb-[56.25%] relative`}>
                {isActive && iframeLoaded && (
                    <iframe
                        className="h-auto w-full aspect-video rounded-xl absolute top-0 left-0"
                        onLoad={handleLoad}
                        src={`https://www.youtube.com/embed/${code}?&rel=0`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                        style={{ zIndex: iframeLoaded ? 1 : -1 }}
                    />
                )}
                <div className="cursor-pointer absolute top-0 left-0 w-full h-auto">
                    <img
                        src={thumbnail}
                        className="w-full rounded-xl"
                        onClick={(e) => handleClickThumbnail(e)}
                        alt="YouTube video thumbnail"
                    />
                    <div className="absolute bottom-2 right-2 px-3 py-1 bg-black rounded-full">
                        <p className="text-white font-medium ">
                            {formatDuration(duration)}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col self-stretch">
                <p className="self-stretch text-black font-bold">
                    {title}
                </p>
                <a
                    target="_blank"
                    href={`https://www.youtube.com/channel/${channelId}`}
                    className="self-stretch text-[#606060] text-sm hover:text-gray-600 duration-150 font-medium"
                >
                    {channelName}
                </a>
                <div className="inline-flex justify-start items-center self-stretch gap-2">
                    <div className="text-[#606060] text-sm lg:text-md 2xl:text-base">
                        {formatViewsLikes(viewCount) + " views"}
                    </div>
                    <div className="text-[#606060] text-sm lg:text-md 2xl:text-base">
                        •
                    </div>
                    <div className="text-[#606060] text-sm lg:text-md 2xl:text-base">
                        {formatViewsLikes(likeCount) + " likes"}
                    </div>
                    <div className="text-[#606060] text-sm lg:text-md 2xl:text-base">
                        •
                    </div>
                    <div className="text-[#606060] text-sm lg:text-md 2xl:text-base">
                        {formatUploaded(createdAt) + " ago"}
                    </div>
                </div>
                <div className="inline-flex justify-between items-center self-stretch pt-2">
                    <ChatterChip onClickMute={handleMuteChatter} sender={submittedBy} />
                    <SaveButton onClickSave={onClickSave} id={id} isLiked={isLiked} />
                </div>
            </div>
        </div>
    );
}
