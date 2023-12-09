// package: submissions
// file: submissions.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Video extends jspb.Message { 
    getId(): number;
    setId(value: number): Video;
    getCode(): string;
    setCode(value: string): Video;
    getUrl(): string;
    setUrl(value: string): Video;
    getThumbnailUrl(): string;
    setThumbnailUrl(value: string): Video;
    getTitle(): string;
    setTitle(value: string): Video;
    getViewCount(): number;
    setViewCount(value: number): Video;
    getLikeCount(): number;
    setLikeCount(value: number): Video;
    getUploadedAt(): string;
    setUploadedAt(value: string): Video;
    getDuration(): number;
    setDuration(value: number): Video;
    getChannelName(): string;
    setChannelName(value: string): Video;
    getChannelId(): string;
    setChannelId(value: string): Video;
    getIsLiked(): boolean;
    setIsLiked(value: boolean): Video;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Video.AsObject;
    static toObject(includeInstance: boolean, msg: Video): Video.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Video, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Video;
    static deserializeBinaryFromReader(message: Video, reader: jspb.BinaryReader): Video;
}

export namespace Video {
    export type AsObject = {
        id: number,
        code: string,
        url: string,
        thumbnailUrl: string,
        title: string,
        viewCount: number,
        likeCount: number,
        uploadedAt: string,
        duration: number,
        channelName: string,
        channelId: string,
        isLiked: boolean,
    }
}

export class Submission extends jspb.Message { 
    getSender(): string;
    setSender(value: string): Submission;
    getSenderId(): number;
    setSenderId(value: number): Submission;
    getSubmissionId(): number;
    setSubmissionId(value: number): Submission;

    hasVideo(): boolean;
    clearVideo(): void;
    getVideo(): Video | undefined;
    setVideo(value?: Video): Submission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Submission.AsObject;
    static toObject(includeInstance: boolean, msg: Submission): Submission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Submission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Submission;
    static deserializeBinaryFromReader(message: Submission, reader: jspb.BinaryReader): Submission;
}

export namespace Submission {
    export type AsObject = {
        sender: string,
        senderId: number,
        submissionId: number,
        video?: Video.AsObject,
    }
}

export class GetSubmissionsRequest extends jspb.Message { 
    getChannel(): string;
    setChannel(value: string): GetSubmissionsRequest;

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): number | undefined;
    setLimit(value: number): GetSubmissionsRequest;

    hasCursor(): boolean;
    clearCursor(): void;
    getCursor(): number | undefined;
    setCursor(value: number): GetSubmissionsRequest;

    hasMaxDuration(): boolean;
    clearMaxDuration(): void;
    getMaxDuration(): number | undefined;
    setMaxDuration(value: number): GetSubmissionsRequest;

    hasMinDuration(): boolean;
    clearMinDuration(): void;
    getMinDuration(): number | undefined;
    setMinDuration(value: number): GetSubmissionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSubmissionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSubmissionsRequest): GetSubmissionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSubmissionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSubmissionsRequest;
    static deserializeBinaryFromReader(message: GetSubmissionsRequest, reader: jspb.BinaryReader): GetSubmissionsRequest;
}

export namespace GetSubmissionsRequest {
    export type AsObject = {
        channel: string,
        limit?: number,
        cursor?: number,
        maxDuration?: number,
        minDuration?: number,
    }
}

export class SubmissionsResponse extends jspb.Message { 
    clearSubmissionsList(): void;
    getSubmissionsList(): Array<Submission>;
    setSubmissionsList(value: Array<Submission>): SubmissionsResponse;
    addSubmissions(value?: Submission, index?: number): Submission;
    getCursor(): number;
    setCursor(value: number): SubmissionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubmissionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubmissionsResponse): SubmissionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubmissionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubmissionsResponse;
    static deserializeBinaryFromReader(message: SubmissionsResponse, reader: jspb.BinaryReader): SubmissionsResponse;
}

export namespace SubmissionsResponse {
    export type AsObject = {
        submissionsList: Array<Submission.AsObject>,
        cursor: number,
    }
}

export class MuteMemberRequest extends jspb.Message { 
    getChannel(): string;
    setChannel(value: string): MuteMemberRequest;
    getChatter(): string;
    setChatter(value: string): MuteMemberRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MuteMemberRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MuteMemberRequest): MuteMemberRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MuteMemberRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MuteMemberRequest;
    static deserializeBinaryFromReader(message: MuteMemberRequest, reader: jspb.BinaryReader): MuteMemberRequest;
}

export namespace MuteMemberRequest {
    export type AsObject = {
        channel: string,
        chatter: string,
    }
}

export class MuteMemberResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MuteMemberResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MuteMemberResponse): MuteMemberResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MuteMemberResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MuteMemberResponse;
    static deserializeBinaryFromReader(message: MuteMemberResponse, reader: jspb.BinaryReader): MuteMemberResponse;
}

export namespace MuteMemberResponse {
    export type AsObject = {
    }
}

export class LikeVideoRequest extends jspb.Message { 
    getVideoId(): number;
    setVideoId(value: number): LikeVideoRequest;
    getChannel(): string;
    setChannel(value: string): LikeVideoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LikeVideoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LikeVideoRequest): LikeVideoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LikeVideoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LikeVideoRequest;
    static deserializeBinaryFromReader(message: LikeVideoRequest, reader: jspb.BinaryReader): LikeVideoRequest;
}

export namespace LikeVideoRequest {
    export type AsObject = {
        videoId: number,
        channel: string,
    }
}

export class LikeVideoResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LikeVideoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LikeVideoResponse): LikeVideoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LikeVideoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LikeVideoResponse;
    static deserializeBinaryFromReader(message: LikeVideoResponse, reader: jspb.BinaryReader): LikeVideoResponse;
}

export namespace LikeVideoResponse {
    export type AsObject = {
    }
}

export class ArchiveRequest extends jspb.Message { 
    clearMessagesList(): void;
    getMessagesList(): Array<ArchiveRequest.Chat>;
    setMessagesList(value: Array<ArchiveRequest.Chat>): ArchiveRequest;
    addMessages(value?: ArchiveRequest.Chat, index?: number): ArchiveRequest.Chat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArchiveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ArchiveRequest): ArchiveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArchiveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArchiveRequest;
    static deserializeBinaryFromReader(message: ArchiveRequest, reader: jspb.BinaryReader): ArchiveRequest;
}

export namespace ArchiveRequest {
    export type AsObject = {
        messagesList: Array<ArchiveRequest.Chat.AsObject>,
    }


    export class Chat extends jspb.Message { 
        getChatter(): string;
        setChatter(value: string): Chat;
        getChannel(): string;
        setChannel(value: string): Chat;
        getMessage(): string;
        setMessage(value: string): Chat;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Chat.AsObject;
        static toObject(includeInstance: boolean, msg: Chat): Chat.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Chat, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Chat;
        static deserializeBinaryFromReader(message: Chat, reader: jspb.BinaryReader): Chat;
    }

    export namespace Chat {
        export type AsObject = {
            chatter: string,
            channel: string,
            message: string,
        }
    }

}

export class ArchiveResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArchiveResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ArchiveResponse): ArchiveResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArchiveResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArchiveResponse;
    static deserializeBinaryFromReader(message: ArchiveResponse, reader: jspb.BinaryReader): ArchiveResponse;
}

export namespace ArchiveResponse {
    export type AsObject = {
    }
}
