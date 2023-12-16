import React, { useState, useEffect, useRef } from 'react';
import { throttle } from 'throttle-debounce';

interface Props {
    children: React.ReactNode;
    next: () => any;
    setFetching: (v: boolean) => void;
}

export default function InfiniteScroll({ children, next, setFetching }: Props) {
    const [reachedBottom, setReachedBottom] = useState(false);
    const parentRef = useRef<HTMLDivElement | null>(null);
    const itemsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (reachedBottom) {
            const intervalId = setInterval(() => {
                next && next();
            }, 3000);
            return () => clearInterval(intervalId);
        }
    }, [reachedBottom]);

    useEffect(() => {
        window.addEventListener("scroll", throttledOnScrollListener);
        return () => window.removeEventListener("scroll", throttledOnScrollListener);
    }, []);

    const throttledOnScrollListener = throttle(150, () => isAtBottom());

    const isAtBottom = () => {
        const { offsetHeight, scrollTop } = document.documentElement;
        const innerHeight = window.innerHeight;

        const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 200;
        if (hasReachedBottom) {
            next && next();
        }
        setReachedBottom(hasReachedBottom)
        setFetching(hasReachedBottom)
    }

    return (
        <div className="w-full" ref={parentRef}>
            <div className="h-auto overflow-auto" ref={itemsRef}>
                {children}
            </div>
        </div>
    )
}