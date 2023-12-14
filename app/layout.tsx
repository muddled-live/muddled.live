import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";

import Provider from "@/app/context/client-provider";
import { authOptions } from "@/app/api";

import "./globals.css";
import { mosk } from "./utils/font";


export const metadata: Metadata = {
    title: "Muddled",
    description: "A site for Atrioc + friends",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="en">
            <body className={mosk.className}>
                <Provider session={session}>{children}</Provider>
            </body>
        </html>
    );
}
