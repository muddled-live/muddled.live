import { SubmissionManagerClient } from "./muddled/submissions_grpc_pb";
import { credentials, ServiceError } from "@grpc/grpc-js";
import {
  ArchiveRequest,
  GetSubmissionsRequest,
  LikeVideoRequest,
  LikeVideoResponse,
  MuteMemberRequest,
  MuteMemberResponse,
  SubmissionsResponse,
} from "./muddled/submissions_pb";

type Res<T> = (v: T | PromiseLike<T>) => void;
type Rej = (err: any) => void;
export type GetSubmissionsOptions = {
  limit: number;
  cursor: number;
  maxDuration: number;
  minDuration: number;
};

export type ArchiveMessage = {
  chatter: string;
  channel: string;
  message: string;
};

export const TEST_CHANNEL = "CrimpsOnSloper";

const callback =
  <T>(res: Res<T>, rej: Rej) =>
  (err: ServiceError | null, resp: T) => {
    if (err) rej(err);
    else res(resp);
  };

function getClient(): SubmissionManagerClient {
  const serverUrl = process.env.SERVER_URL;
  if (!serverUrl) throw new Error(`Missing env SERVER_URL`);
  const client = new SubmissionManagerClient(
    serverUrl,
    credentials.createInsecure(),
  );
  return client;
}

export const getSubmissions = async (
  channel: string,
  opt: Partial<GetSubmissionsOptions>,
): Promise<SubmissionsResponse> => {
  const req = new GetSubmissionsRequest().setChannel(channel);
  if (opt.limit) req.setLimit(opt.limit);
  if (opt.cursor) req.setCursor(opt.cursor);
  if (opt.maxDuration) req.setMaxDuration(opt.maxDuration);
  if (opt.minDuration) req.setMinDuration(opt.minDuration);

  return new Promise((res, rej) =>
    getClient().getSubmissions(req, callback(res, rej)),
  );
};

export const muteMember = async (
  channel: string,
  chatter: string,
): Promise<MuteMemberResponse> => {
  const req = new MuteMemberRequest().setChannel(channel).setChatter(chatter);
  return new Promise((res, rej) =>
    getClient().muteMember(req, callback(res, rej)),
  );
};

export const likeVideo = async (
  channel: string,
  vidId: number,
): Promise<LikeVideoResponse> => {
  const req = new LikeVideoRequest().setChannel(channel).setVideoId(vidId);
  return new Promise((res, rej) =>
    getClient().likeVideo(req, callback(res, rej)),
  );
};

export const archive = async (...msgs: ArchiveMessage[]) => {
  const req = new ArchiveRequest();
  msgs.forEach((msg) =>
    req.addMessages(
      new ArchiveRequest.Chat()
        .setChannel(msg.channel)
        .setChatter(msg.chatter)
        .setMessage(msg.message),
    ),
  );
  return new Promise((res, rej) =>
    getClient().archive(req, callback(res, rej)),
  );
};
