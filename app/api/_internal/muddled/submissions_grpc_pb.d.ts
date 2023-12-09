// package: submissions
// file: submissions.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as submissions_pb from "./submissions_pb";

interface ISubmissionManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSubmissions: ISubmissionManagerService_IGetSubmissions;
    muteMember: ISubmissionManagerService_IMuteMember;
    likeVideo: ISubmissionManagerService_ILikeVideo;
    archive: ISubmissionManagerService_IArchive;
}

interface ISubmissionManagerService_IGetSubmissions extends grpc.MethodDefinition<submissions_pb.GetSubmissionsRequest, submissions_pb.SubmissionsResponse> {
    path: "/submissions.SubmissionManager/GetSubmissions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<submissions_pb.GetSubmissionsRequest>;
    requestDeserialize: grpc.deserialize<submissions_pb.GetSubmissionsRequest>;
    responseSerialize: grpc.serialize<submissions_pb.SubmissionsResponse>;
    responseDeserialize: grpc.deserialize<submissions_pb.SubmissionsResponse>;
}
interface ISubmissionManagerService_IMuteMember extends grpc.MethodDefinition<submissions_pb.MuteMemberRequest, submissions_pb.MuteMemberResponse> {
    path: "/submissions.SubmissionManager/MuteMember";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<submissions_pb.MuteMemberRequest>;
    requestDeserialize: grpc.deserialize<submissions_pb.MuteMemberRequest>;
    responseSerialize: grpc.serialize<submissions_pb.MuteMemberResponse>;
    responseDeserialize: grpc.deserialize<submissions_pb.MuteMemberResponse>;
}
interface ISubmissionManagerService_ILikeVideo extends grpc.MethodDefinition<submissions_pb.LikeVideoRequest, submissions_pb.LikeVideoResponse> {
    path: "/submissions.SubmissionManager/LikeVideo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<submissions_pb.LikeVideoRequest>;
    requestDeserialize: grpc.deserialize<submissions_pb.LikeVideoRequest>;
    responseSerialize: grpc.serialize<submissions_pb.LikeVideoResponse>;
    responseDeserialize: grpc.deserialize<submissions_pb.LikeVideoResponse>;
}
interface ISubmissionManagerService_IArchive extends grpc.MethodDefinition<submissions_pb.ArchiveRequest, submissions_pb.ArchiveResponse> {
    path: "/submissions.SubmissionManager/Archive";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<submissions_pb.ArchiveRequest>;
    requestDeserialize: grpc.deserialize<submissions_pb.ArchiveRequest>;
    responseSerialize: grpc.serialize<submissions_pb.ArchiveResponse>;
    responseDeserialize: grpc.deserialize<submissions_pb.ArchiveResponse>;
}

export const SubmissionManagerService: ISubmissionManagerService;

export interface ISubmissionManagerServer extends grpc.UntypedServiceImplementation {
    getSubmissions: grpc.handleUnaryCall<submissions_pb.GetSubmissionsRequest, submissions_pb.SubmissionsResponse>;
    muteMember: grpc.handleUnaryCall<submissions_pb.MuteMemberRequest, submissions_pb.MuteMemberResponse>;
    likeVideo: grpc.handleUnaryCall<submissions_pb.LikeVideoRequest, submissions_pb.LikeVideoResponse>;
    archive: grpc.handleUnaryCall<submissions_pb.ArchiveRequest, submissions_pb.ArchiveResponse>;
}

export interface ISubmissionManagerClient {
    getSubmissions(request: submissions_pb.GetSubmissionsRequest, callback: (error: grpc.ServiceError | null, response: submissions_pb.SubmissionsResponse) => void): grpc.ClientUnaryCall;
    getSubmissions(request: submissions_pb.GetSubmissionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: submissions_pb.SubmissionsResponse) => void): grpc.ClientUnaryCall;
    getSubmissions(request: submissions_pb.GetSubmissionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: submissions_pb.SubmissionsResponse) => void): grpc.ClientUnaryCall;
    muteMember(request: submissions_pb.MuteMemberRequest, callback: (error: grpc.ServiceError | null, response: submissions_pb.MuteMemberResponse) => void): grpc.ClientUnaryCall;
    muteMember(request: submissions_pb.MuteMemberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: submissions_pb.MuteMemberResponse) => void): grpc.ClientUnaryCall;
    muteMember(request: submissions_pb.MuteMemberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: submissions_pb.MuteMemberResponse) => void): grpc.ClientUnaryCall;
    likeVideo(request: submissions_pb.LikeVideoRequest, callback: (error: grpc.ServiceError | null, response: submissions_pb.LikeVideoResponse) => void): grpc.ClientUnaryCall;
    likeVideo(request: submissions_pb.LikeVideoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: submissions_pb.LikeVideoResponse) => void): grpc.ClientUnaryCall;
    likeVideo(request: submissions_pb.LikeVideoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: submissions_pb.LikeVideoResponse) => void): grpc.ClientUnaryCall;
    archive(request: submissions_pb.ArchiveRequest, callback: (error: grpc.ServiceError | null, response: submissions_pb.ArchiveResponse) => void): grpc.ClientUnaryCall;
    archive(request: submissions_pb.ArchiveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: submissions_pb.ArchiveResponse) => void): grpc.ClientUnaryCall;
    archive(request: submissions_pb.ArchiveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: submissions_pb.ArchiveResponse) => void): grpc.ClientUnaryCall;
}

export class SubmissionManagerClient extends grpc.Client implements ISubmissionManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getSubmissions(request: submissions_pb.GetSubmissionsRequest, callback: (error: grpc.ServiceError | null, response: submissions_pb.SubmissionsResponse) => void): grpc.ClientUnaryCall;
    public getSubmissions(request: submissions_pb.GetSubmissionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: submissions_pb.SubmissionsResponse) => void): grpc.ClientUnaryCall;
    public getSubmissions(request: submissions_pb.GetSubmissionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: submissions_pb.SubmissionsResponse) => void): grpc.ClientUnaryCall;
    public muteMember(request: submissions_pb.MuteMemberRequest, callback: (error: grpc.ServiceError | null, response: submissions_pb.MuteMemberResponse) => void): grpc.ClientUnaryCall;
    public muteMember(request: submissions_pb.MuteMemberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: submissions_pb.MuteMemberResponse) => void): grpc.ClientUnaryCall;
    public muteMember(request: submissions_pb.MuteMemberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: submissions_pb.MuteMemberResponse) => void): grpc.ClientUnaryCall;
    public likeVideo(request: submissions_pb.LikeVideoRequest, callback: (error: grpc.ServiceError | null, response: submissions_pb.LikeVideoResponse) => void): grpc.ClientUnaryCall;
    public likeVideo(request: submissions_pb.LikeVideoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: submissions_pb.LikeVideoResponse) => void): grpc.ClientUnaryCall;
    public likeVideo(request: submissions_pb.LikeVideoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: submissions_pb.LikeVideoResponse) => void): grpc.ClientUnaryCall;
    public archive(request: submissions_pb.ArchiveRequest, callback: (error: grpc.ServiceError | null, response: submissions_pb.ArchiveResponse) => void): grpc.ClientUnaryCall;
    public archive(request: submissions_pb.ArchiveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: submissions_pb.ArchiveResponse) => void): grpc.ClientUnaryCall;
    public archive(request: submissions_pb.ArchiveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: submissions_pb.ArchiveResponse) => void): grpc.ClientUnaryCall;
}
