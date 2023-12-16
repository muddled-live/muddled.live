import { NextRequest, NextResponse } from "next/server";
import { getUser } from "..";

export async function GET(req: NextRequest) {
    const query = new URL(req.url).search;
    const user = await getUser();
    if (!user) {
        return NextResponse.json({ error: "Not authorized." }, { status: 401 });
    }

    try {
        const subs = await fetch(`${process.env.SERVER_URL}/submissions${query}&channel=atrioc`)
            .then(resp => {
                return resp.json()
            }).then((r) => {
                console.log(r)
                return r.data
            });

        return NextResponse.json(subs);
    } catch (err) {
        let error = "Internal error.";
        if (err instanceof Error) error = err.message;
        return NextResponse.json({ error }, { status: 500 });
    }
}
