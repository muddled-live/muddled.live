import { getUser } from "@/app/api";
import { NextRequest, NextResponse } from "next/server";

type Context = {
    params: {
        username: string;
    };
};

export async function GET(req: NextRequest) {
    const user = await getUser();
    if (!user) {
        return NextResponse.json({ error: "Not authorized." }, { status: 401 });
    }
    try {
        const data = await fetch(`http://localhost:3001/load/${user.name}`).then(resp => {
            return resp.json()
        }).then((r) => {
            console.log(r)
            return r.data
        });
        return NextResponse.json(data);
    } catch (err) {
        let error = "Internal error.";
        if (err instanceof Error) error = err.message;
        return NextResponse.json({ error }, { status: 500 });
    }
}
