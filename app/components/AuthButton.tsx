'use client'

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
    const { data: session, status } = useSession();

    return session?.user ? (
        <button className="flex justify-end items-center rounded-full border-4 border-white text-lg font-bold gap-8 p-1 pl-8"
            onClick={() => signOut()}>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <p className="flip-card-front absolute w-full h-full flex justify-center items-center text-white text-xl font-bold lowercase p-2 ">
                        {session?.user?.name}
                    </p>
                    <p
                        className="flip-card-back absolute w-full h-full flex justify-center items-center text-white text-xl font-bold lowercase p-2 "
                    >
                        sign out?
                    </p>
                </div>
            </div>
            <div className="w-10 h-10 flex justify-center items-center rounded-full border-2 border-white relative">
                {session?.user?.image ? (
                    <img
                        className="w-9 h-9 rounded-full "
                        src={session?.user?.image}
                        alt="Your Twitch avatar"
                    />
                ) : (
                    <div className="w-9 h-9 rounded-full bg-gray-500" />
                )}
            </div>
        </button>
    ) : (
        <button
            onClick={() => signIn("twitch")}
            className="flex justify-end items-center text-white text-lg font-bold border-4 border-white rounded-full gap-16 py-2 px-16"
        >
            sign in
        </button>
    )
}