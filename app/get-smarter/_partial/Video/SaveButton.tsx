import { useState } from "react";
import { likeVideo } from "@/app/api";

type Props = {
    id: number;
    isLiked: boolean;
    onClickSave: (saved: boolean) => void;
};

export default function SaveButton({ id, isLiked, onClickSave }: Props) {
    const [saved, setSaved] = useState(isLiked);

    const handleClickSave = async (event: any) => {
        event.preventDefault();
        setSaved(!saved);
        likeVideo(id).catch((error) => console.error(error));
        onClickSave(!saved);
    };

    return (
        <button
            onClick={handleClickSave}
            className="flex justify-center items-center hover:bg-gray-200 rounded-full p-1"
        >
            <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill={saved ? "#7222C2" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke={saved ? "#7222C2" : "#ADADAD"}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
            </svg>
        </button>
    );
}
