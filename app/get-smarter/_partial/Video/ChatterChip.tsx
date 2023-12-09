"use client";
import { muteMember } from "@/app/api";

type Props = {
  onClickMute: (sender: string) => void;
  sender: string;
};

export default function ChatterChip({ onClickMute, sender }: Props) {
  const handleClickMute = (event: any) => {
    if (!window.confirm(`Are you sure you want to mute ${sender}?`)) return;
    event.preventDefault();
    onClickMute(sender);
    muteMember(sender).catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-start items-center bg-primary-base rounded-full gap-1 p-1 pr-3">
      <button
        onClick={handleClickMute}
        className="hover:bg-primary-light rounded-full duration-150 p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <p className="text-white text-sm lg:text-md 2xl:text-base lowercase">
        {sender}
      </p>
    </div>
  );
}
