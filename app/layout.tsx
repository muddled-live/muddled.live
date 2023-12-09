import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";

import Provider from "@/app/context/client-provider";
import { authOptions } from "@/app/api";

import localFont from "next/font/local";

import "./globals.css";

const mosk = localFont({
  src: [
    {
      path: "../public/fonts/mosk/100-thin.ttf",
      weight: "100",
    },
    {
      path: "../public/fonts/mosk/200-extra-light.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/mosk/300-light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/mosk/400-normal.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/mosk/500-medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/mosk/600-semi-bold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/mosk/700-bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/mosk/800-black.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/mosk/900-ultra-bold.ttf",
      weight: "900",
    },
  ],
});

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
