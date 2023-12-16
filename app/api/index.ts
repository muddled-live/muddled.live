import { type AuthOptions, getServerSession } from "next-auth";
import Twitch from "next-auth/providers/twitch";

export type User = {
    name: string;
    email: string;
    image: string;
};

export const authOptions: AuthOptions = {
    providers: [
        Twitch({
            clientId: process.env.TWITCH_CLIENT_ID as string,
            clientSecret: process.env.TWITCH_CLIENT_SECRET as string,
        }),
    ],
    pages: {
        signIn: '/',
        signOut: '/'
    }
};

export const likeVideo = (id: number) =>
    fetch(`/api/videos/${id}/like`, { method: "PATCH" });

export const muteMember = (chatter: string) =>
    fetch(`/api/members/${chatter}/mute`, { method: "PATCH" });

export const pageLoad = () => {
    return fetch(`/api/load`, { method: "GET" });

}

export const getSubmissions = (cursor: number) =>
    fetch(`/api/submissions?cursor=${cursor}`, { method: "GET" });


export const getUser = async (): Promise<User | null> => {
    const session = await getServerSession(authOptions);
    const user = session?.user as User | undefined;
    return user ?? null;
};
