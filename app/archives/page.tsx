"use client";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
// LIBRARY COMPONENTS
import InfiniteScroll from "react-infinite-scroll-component";
// TYPES
import { Submission as ISubmission } from "../api/_internal/muddled/submissions_pb";
import { Submission, Submissions } from "@/app/api";
import FilterTabs from "./_partial/FilterTabs";
import Video from "./_partial/Video";
import VideoSkeleton from "./_partial/VideoSkeleton";
import Loader from "../_shared/Loader";

import "./styles.css";

const FIRST_FETCH = 9;
const VIDEOS_TO_FETCH = 3;
// const INTERVAL_DELAY = 1000;

function addExtraFields(submissionsList: ISubmission.AsObject[]): Submissions {
  return submissionsList.map((obj) => ({
    ...obj,
    isMuted: false,
  }));
}

function VideoLoader({ num }: { num: number }) {
  return Array(num).map((i) => <VideoSkeleton key={i} />);
}

export default function Archives() {
  const { status } = useSession();

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
  const cursorRef = useRef(0);

  useEffect(() => {
    fetchData();
  }, [params]);

  const fetchData = async () => {
    try {
      const query = new URLSearchParams();
      Object.entries(params.urlParams).forEach(([k, v]) =>
        query.set(k, v.toString()),
      );
      const response = await fetch("/api/submissions?" + query);
      const { submissionsList, cursor } = await response.json();
      setHasMore(submissionsList.length == params.urlParams.limit);

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

  const updateCursor = () => {
    setParams({
      ...params,
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
      ...params,
      action: "FILTER",
      urlParams: {
        limit: FIRST_FETCH,
        cursor: 0,
        minDuration: min,
        maxDuration: max,
      },
    });
  };

  const handleSelectVideo = (id: number) => setSelectedVideo(id);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="flex items-start max-w-screen min-h-screen">
      <div className="content flex flex-wrap p-4">
        <InfiniteScroll
          dataLength={submissions.length}
          next={updateCursor}
          hasMore={hasMore}
          loader={<VideoLoader num={9} />}
          endMessage={<p>no more videos</p>}
        >
          {submissions.map((submission: Submission, index: number) => (
            <Video
              key={index}
              isActive={selectedVideo === submission.submissionId}
              submission={submission}
              handleSelectVideo={handleSelectVideo}
            />
          ))}
        </InfiniteScroll>
      </div>

      <div className="fixed right-0 bottom-0 flex flex-col justify-end items-center gap-6 flex-shrink-0 w-[350px] p-4 pl-0">
        <div className="fixed right-0 bottom-0 flex flex-col justify-end items-center gap-6 flex-shrink-0 w-[350px] p-4 pl-0">
          <div className="w-full p-4 bg-white rounded-2xl large-box-shadow flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-1 flex">
              <FilterTabs handleFilter={handleFilter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
