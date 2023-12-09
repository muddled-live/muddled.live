import { getUser } from "@/app/api";
import { likeVideo, TEST_CHANNEL } from "@/app/api/_internal/muddled";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: {
    id: string;
  };
};

export async function PATCH(_: NextRequest, { params }: Context) {
  const user = await getUser();
  if (!user) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }
  try {
    await likeVideo(user.name, Number(params.id));
    return new NextResponse();
  } catch (err) {
    let error = "Internal error.";
    if (err instanceof Error) error = err.message;
    return NextResponse.json({ error }, { status: 500 });
  }
}
