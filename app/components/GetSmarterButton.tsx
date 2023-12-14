'use client'

import { useSession } from "next-auth/react";

export default function GetSmarterButton() {
    const { data: session, status } = useSession();
    return session?.user && (
        <div className="flex justify-center items-center px-2">
            <a
                href="/get-smarter"
                className="text-slate-600 font-bold transition duration-300 hover:text-gray-900"
            >
                Get Smarter
            </a>
        </div>
    )
}