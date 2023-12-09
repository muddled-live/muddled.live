import {
  ArchiveMessage,
  archive,
  getSubmissions,
} from "@/app/api/_internal/muddled";
import { NextRequest, NextResponse } from "next/server";
import zod from "zod";
import { getUser } from "..";

type Body = {
  messages: ArchiveMessage[];
};

const messageSchema = zod.object({
  message: zod.string().max(470).min("https://youtu.be".length),
  channel: zod.string(),
  chatter: zod.string(),
});

const reqBodySchema = zod.object({
  messages: zod.array(messageSchema),
});

// TODO(dylhack): replace hard-coded auth
const authed = ["ttlnow", "crimpsonsloper"];

export async function POST(req: NextRequest) {
  const user = await getUser();
  if (!user || !authed.includes(user.name.toLowerCase())) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }
  const data = (await req.json()) as Body;
  const parseRes = await reqBodySchema.safeParseAsync(data);
  if (!parseRes.success) {
    return NextResponse.json({ error: parseRes.error }, { status: 400 });
  }

  try {
    await archive(...data.messages);
    return new NextResponse();
  } catch (err) {
    let error = "Internal error.";
    if (err instanceof Error) error = err.message;
    return NextResponse.json({ error }, { status: 500 });
  }
}
