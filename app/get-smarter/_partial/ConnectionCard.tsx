export default function ConnectionCard({
  username,
  connected,
}: {
  username: string;
  connected: boolean;
}) {
  return (
    <div className="w-full bg-white rounded-lg large-box-shadow p-4">
      <div className="self-stretch inline-flex justify-start items-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke={connected ? "#7222C2" : "#ADADAD"}
          className="w-8 h-8 2xl:w-10 2xl:h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
          />
        </svg>
        <div className="flex-col gap-2">
          <div className="text-black text-lg 2xl:text-xl font-bold lowercase">
            {username}
          </div>
          <div className="text-gray-500 text-lg 2xl:text-xl font-medium lowercase">
            {!connected ? "connect to twitch..." : "connected!"}
          </div>
        </div>
      </div>
    </div>
  );
}
