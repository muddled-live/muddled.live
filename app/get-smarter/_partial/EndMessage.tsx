// EndMessage.js

export default function EndMessage({
  handleClickEndMessage,
}: {
  handleClickEndMessage: () => void;
}) {
  return (
    <div className="w-full flex-col justify-center items-center inline-flex mt-8">
      <button
        onClick={handleClickEndMessage}
        className="text-primary-base font-bold text-base lg:text-lg 2xl:text-xl border-primary-base border-2 rounded-full duration-150 px-8 py-2"
      >
        load more videos
      </button>
    </div>
  );
}
