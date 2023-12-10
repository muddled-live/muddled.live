export default function VideoSkeleton({ num = 1 }: { num?: number }) {
    const skeletons = Array.from({ length: num }, (_, index) => (
        <div
            key={index}
            className="sm:w-1/2 xl:w-1/3 2xl:w-1/4 h-full rounded-2xl flex-col justify-start items-start gap-1 inline-flex p-2"
        >
            <div
                role="status"
                className="w-full flex-col justify-end items-end flex animate-pulse"
            >
                <div className="w-full height-0 pb-[56.25%] relative bg-gray-200 rounded-xl mb-2"></div>
                <div className="h-5 bg-gray-200 rounded-full w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
                <div className="h-5 bg-gray-200 rounded-full w-full"></div>
            </div>
        </div>
    ));

    return <>{skeletons}</>;
}
