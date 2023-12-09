"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();

    return (
        <main className="flex min-h-screen flex-row items-center justify-center bg-[url('/LandingBackground.png')] bg-center bg-cover bg-no-repeat">
            <div className="relative w-1/2 flex flex-col justify-center items-center self-stretch">
                <div className="absolute top-0 right-0 flex w-full justify-start items-center gap-20 p-8">
                    <div className="w-[50px] h-[50px] bg-primary-base" />
                    <div className="flex justify-center items-center border-b-4 px-2 border-primary-base">
                        <a className="text-black text-base font-bold">Home</a>
                    </div>
                    {session?.user && (
                        <div className="flex justify-center items-center px-2">
                            <a
                                href="/get-smarter"
                                className="text-slate-600 font-bold transition duration-300 hover:text-gray-900"
                            >
                                Get Smarter
                            </a>
                        </div>
                    )}
                </div>
                <div className="flex flex-col items-start">
                    <p className="text-primary-base leading-trim text-cap text-[20px] leading-[.75] font-black">
                        WELCOME TO
                    </p>
                    <p className="text-black leading-trim text-cap text-[96px] leading-[.75] font-black">
                        muddled.
                    </p>
                </div>
            </div>
            <div className="relative w-1/2 flex justify-end items-start self-stretch p-8">
                {session?.user ? (
                    <div className="flex justify-end items-center rounded-full border-4 border-white text-lg font-bold gap-8 p-1 pl-8">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <p className="flip-card-front absolute w-full h-full flex justify-center items-center text-white text-xl font-bold lowercase p-2 ">
                                    {session?.user?.name}
                                </p>
                                <button
                                    onClick={() => signOut()}
                                    className="flip-card-back absolute w-full h-full flex justify-center items-center text-white text-xl font-bold lowercase p-2 "
                                >
                                    sign out?
                                </button>
                            </div>
                        </div>
                        <div className="w-10 h-10 flex justify-center items-center rounded-full border-2 border-white">
                            {session?.user?.image ? (
                                <img
                                    className="w-9 h-9 rounded-full"
                                    src={session?.user?.image}
                                    alt="Your Twitch avatar"
                                />
                            ) : (
                                <div className="w-9 h-9 rounded-full bg-gray-500" />
                            )}
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => signIn("twitch")}
                        className="flex justify-end items-center text-white text-lg font-bold border-4 border-white rounded-full gap-16 py-2 px-16"
                    >
                        sign in
                    </button>
                )}
            </div>
            <div className="absolute w-5/12 h-3/4 bottom-8 right-8 bg-[url('/BottomRightLanding.png')] bg-cover bg-no-repeat bg-right-bottom"></div>
            <div className="absolute w-5/12 h-1/2 bottom-8 left-8 bg-[url('/BottomLeftLanding.png')] bg-cover bg-no-repeat bg-bottom"></div>
        </main>
    );
}
