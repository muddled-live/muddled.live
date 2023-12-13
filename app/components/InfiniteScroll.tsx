import React, { useState, useEffect, useRef } from 'react';
import { throttle } from 'throttle-debounce';
import VideoSkeleton from '../_shared/VideoSkeleton';

interface Props {
    children: React.ReactNode;
    dataLength: number;
    next: () => any;
}

export default function InfiniteScroll({ children, dataLength, next }: Props) {
    const [showLoader, setShowLoader] = useState<boolean>(false);
    const [reachedBottom, setReachedBottom] = useState(true);
    const infScroll = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.addEventListener("scroll", throttledOnScrollListener);
        return () => window.removeEventListener("scroll", throttledOnScrollListener);
    }, []);

    useEffect(() => {
        setShowLoader(false)
    }, [dataLength]);

    useEffect(() => {
        if (reachedBottom) {
            const intervalId = setInterval(() => {
                next && next();
            }, 3000);
            return () => clearInterval(intervalId);
        }
    }, [reachedBottom]);

    const throttledOnScrollListener = throttle(150, () => {
        const offsetHeight = document.documentElement.offsetHeight;
        const innerHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;

        const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 200;

        if (hasReachedBottom) {
            setShowLoader(true)
            next && next();
        }
        setReachedBottom(hasReachedBottom)
    });

    return (
        <div className="w-full">
            <div className="h-auto overflow-auto" ref={infScroll}>
                {children}
                {showLoader && <VideoSkeleton num={4} />}
            </div>
        </div>
    )
}