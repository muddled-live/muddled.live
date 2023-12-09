"use client";

import { MouseEvent, useState } from "react";

import {
  formatDuration,
  formatUploaded,
  formatViewsLikes,
} from "@/app/utils/utils";
import { Submission } from "@/app/api";
import VideoSkeleton from "./VideoSkeleton";

import "./styles.css";

type VideoProps = {
  isActive: boolean;
  submission: Submission;
  handleSelectVideo: (submissionId: number) => void;
};

export default function Video({
  isActive,
  submission,
  handleSelectVideo,
}: VideoProps) {
  const { sender, senderId, submissionId, video, isMuted } = submission!;
  const {
    id,
    code,
    thumbnailUrl,
    title,
    viewCount,
    likeCount,
    uploadedAt,
    duration,
    channelName,
    channelId,
    isLiked,
  } = video!;

  const [loaded, setLoaded] = useState(true);

  const handleClickThumbnail = (event: MouseEvent) => {
    event.preventDefault();
    handleSelectVideo(submissionId);
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  if (isMuted) {
    return <VideoSkeleton />;
  } else {
    return (
      <div className="w-1/2 h-full rounded-2xl flex-col justify-start items-start gap-1 inline-flex p-2">
        <div className="w-full flex-col justify-end items-end flex video-container">
          {isActive && (
            <iframe
              className="iframe-container"
              onLoad={handleLoad}
              src={`https://www.youtube.com/embed/${code}?&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
            />
          )}
          {!isActive && (
            <div className="w-full cursor-pointer thumbnail-container">
              <img
                src={thumbnailUrl}
                className={`w-full rounded-2xl}`}
                onClick={(e) => handleClickThumbnail(e)}
                alt="YouTube video thumbnail"
              />
              <div className="self-stretch grow shrink basis-0 p-2.5 justify-end items-end inline-flex absolute bottom-0 right-0 ">
                <div className="px-3 py-1 bg-black rounded-full justify-center items-center gap-2.5 flex">
                  <div className="text-white text-base font-medium ">
                    {formatDuration(duration)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="self-stretch flex-col justify-start items-start flex">
          <div className="self-stretch text-black text-base font-bold leading-tight">
            {title}
          </div>
          <a
            target="_blank"
            href={`https://www.youtube.com/channel/${channelId}`}
            className="self-stretch text-zinc-400 hover:text-zinc-500 text-sm font-medium "
          >
            {channelName}
          </a>
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="text-zinc-400 text-sm font-normal">
              {formatViewsLikes(viewCount) + " views"}
            </div>
            <div className="text-zinc-400 text-sm font-normal">•</div>
            <div className="text-zinc-400 text-sm font-normal">
              {formatViewsLikes(likeCount) + " likes"}
            </div>
            <div className="text-zinc-400 text-sm font-normal">•</div>
            <div className="text-zinc-400 text-sm font-normal">
              {formatUploaded(uploadedAt) + " ago"}
            </div>
          </div>
          <div className="self-stretch pt-2 justify-between items-center inline-flex">
            <div className="p-1 pr-3 bg-[#7222C2] rounded-full justify-start items-center gap-1 flex">
              <div className="text-white text-sm font-light lowercase">
                {sender}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
