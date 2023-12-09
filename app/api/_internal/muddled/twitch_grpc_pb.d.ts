// package: twitch
// file: twitch.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as twitch_pb from "./twitch_pb";

interface ITwitchManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    joinChannel: ITwitchManagerService_IJoinChannel;
}

interface ITwitchManagerService_IJoinChannel extends grpc.MethodDefinition<twitch_pb.JoinRequest, twitch_pb.JoinResponse> {
    path: "/twitch.TwitchManager/JoinChannel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<twitch_pb.JoinRequest>;
    requestDeserialize: grpc.deserialize<twitch_pb.JoinRequest>;
    responseSerialize: grpc.serialize<twitch_pb.JoinResponse>;
    responseDeserialize: grpc.deserialize<twitch_pb.JoinResponse>;
}

export const TwitchManagerService: ITwitchManagerService;

export interface ITwitchManagerServer extends grpc.UntypedServiceImplementation {
    joinChannel: grpc.handleUnaryCall<twitch_pb.JoinRequest, twitch_pb.JoinResponse>;
}

export interface ITwitchManagerClient {
    joinChannel(request: twitch_pb.JoinRequest, callback: (error: grpc.ServiceError | null, response: twitch_pb.JoinResponse) => void): grpc.ClientUnaryCall;
    joinChannel(request: twitch_pb.JoinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: twitch_pb.JoinResponse) => void): grpc.ClientUnaryCall;
    joinChannel(request: twitch_pb.JoinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: twitch_pb.JoinResponse) => void): grpc.ClientUnaryCall;
}

export class TwitchManagerClient extends grpc.Client implements ITwitchManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public joinChannel(request: twitch_pb.JoinRequest, callback: (error: grpc.ServiceError | null, response: twitch_pb.JoinResponse) => void): grpc.ClientUnaryCall;
    public joinChannel(request: twitch_pb.JoinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: twitch_pb.JoinResponse) => void): grpc.ClientUnaryCall;
    public joinChannel(request: twitch_pb.JoinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: twitch_pb.JoinResponse) => void): grpc.ClientUnaryCall;
}
