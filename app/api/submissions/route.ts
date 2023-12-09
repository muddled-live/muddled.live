import { getSubmissions } from "@/app/api/_internal/muddled";
import { NextRequest, NextResponse } from "next/server";
import { getUser } from "..";

export async function GET(req: NextRequest) {
  const query = new URL(req.url).searchParams;
  const user = await getUser();
  if (!user) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }

  try {
    const subs = await getSubmissions(user.name, {
      limit: Number(query.get("limit")) || undefined,
      cursor: Number(query.get("cursor")) || undefined,
      minDuration: Number(query.get("minDuration")) || undefined,
      maxDuration: Number(query.get("maxDuration")) || undefined,
    }).then((r) => r.toObject());

    return NextResponse.json(subs);
  } catch (err) {
    let error = "Internal error.";
    if (err instanceof Error) error = err.message;
    return NextResponse.json({ error }, { status: 500 });
  }
}
