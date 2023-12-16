import { getUser } from "@/app/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const user = await getUser();
    console.log(user)
    if (!user) {
        return NextResponse.json({ error: "Not authorized." }, { status: 401 });
    }
    try {
        const data = await fetch(`${process.env.SERVER_URL}/load/atrioc`)
            .then(resp => {
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
