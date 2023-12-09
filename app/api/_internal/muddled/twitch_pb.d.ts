// package: twitch
// file: twitch.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class JoinRequest extends jspb.Message { 
    getChannel(): string;
    setChannel(value: string): JoinRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JoinRequest): JoinRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinRequest;
    static deserializeBinaryFromReader(message: JoinRequest, reader: jspb.BinaryReader): JoinRequest;
}

export namespace JoinRequest {
    export type AsObject = {
        channel: string,
    }
}

export class JoinResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinResponse.AsObject;
    static toObject(includeInstance: boolean, msg: JoinResponse): JoinResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinResponse;
    static deserializeBinaryFromReader(message: JoinResponse, reader: jspb.BinaryReader): JoinResponse;
}

export namespace JoinResponse {
    export type AsObject = {
    }
}
