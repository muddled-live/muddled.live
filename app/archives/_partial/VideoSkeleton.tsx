export default function VideoSkeleton() {
  return (
    <div className="w-1/3 h-full rounded-2xl flex-col justify-start items-start gap-1 inline-flex p-2">
      <div
        role="status"
        className="w-full flex-col justify-end items-end flex animate-pulse"
      >
        <div className="loading-thumbnail bg-gray-200 rounded-xl mb-2"></div>
        <div className="h-5 bg-gray-200 rounded-full w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
        <div className="h-5 bg-gray-200 rounded-full w-full"></div>
      </div>
    </div>
  );
}
