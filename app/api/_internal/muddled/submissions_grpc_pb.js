// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var submissions_pb = require('./submissions_pb.js');

function serialize_submissions_ArchiveRequest(arg) {
  if (!(arg instanceof submissions_pb.ArchiveRequest)) {
    throw new Error('Expected argument of type submissions.ArchiveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_submissions_ArchiveRequest(buffer_arg) {
  return submissions_pb.ArchiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_submissions_ArchiveResponse(arg) {
  if (!(arg instanceof submissions_pb.ArchiveResponse)) {
    throw new Error('Expected argument of type submissions.ArchiveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_submissions_ArchiveResponse(buffer_arg) {
  return submissions_pb.ArchiveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_submissions_GetSubmissionsRequest(arg) {
  if (!(arg instanceof submissions_pb.GetSubmissionsRequest)) {
    throw new Error('Expected argument of type submissions.GetSubmissionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_submissions_GetSubmissionsRequest(buffer_arg) {
  return submissions_pb.GetSubmissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_submissions_LikeVideoRequest(arg) {
  if (!(arg instanceof submissions_pb.LikeVideoRequest)) {
    throw new Error('Expected argument of type submissions.LikeVideoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_submissions_LikeVideoRequest(buffer_arg) {
  return submissions_pb.LikeVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_submissions_LikeVideoResponse(arg) {
  if (!(arg instanceof submissions_pb.LikeVideoResponse)) {
    throw new Error('Expected argument of type submissions.LikeVideoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_submissions_LikeVideoResponse(buffer_arg) {
  return submissions_pb.LikeVideoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_submissions_MuteMemberRequest(arg) {
  if (!(arg instanceof submissions_pb.MuteMemberRequest)) {
    throw new Error('Expected argument of type submissions.MuteMemberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_submissions_MuteMemberRequest(buffer_arg) {
  return submissions_pb.MuteMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_submissions_MuteMemberResponse(arg) {
  if (!(arg instanceof submissions_pb.MuteMemberResponse)) {
    throw new Error('Expected argument of type submissions.MuteMemberResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_submissions_MuteMemberResponse(buffer_arg) {
  return submissions_pb.MuteMemberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_submissions_SubmissionsResponse(arg) {
  if (!(arg instanceof submissions_pb.SubmissionsResponse)) {
    throw new Error('Expected argument of type submissions.SubmissionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_submissions_SubmissionsResponse(buffer_arg) {
  return submissions_pb.SubmissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SubmissionManagerService = exports.SubmissionManagerService = {
  getSubmissions: {
    path: '/submissions.SubmissionManager/GetSubmissions',
    requestStream: false,
    responseStream: false,
    requestType: submissions_pb.GetSubmissionsRequest,
    responseType: submissions_pb.SubmissionsResponse,
    requestSerialize: serialize_submissions_GetSubmissionsRequest,
    requestDeserialize: deserialize_submissions_GetSubmissionsRequest,
    responseSerialize: serialize_submissions_SubmissionsResponse,
    responseDeserialize: deserialize_submissions_SubmissionsResponse,
  },
  muteMember: {
    path: '/submissions.SubmissionManager/MuteMember',
    requestStream: false,
    responseStream: false,
    requestType: submissions_pb.MuteMemberRequest,
    responseType: submissions_pb.MuteMemberResponse,
    requestSerialize: serialize_submissions_MuteMemberRequest,
    requestDeserialize: deserialize_submissions_MuteMemberRequest,
    responseSerialize: serialize_submissions_MuteMemberResponse,
    responseDeserialize: deserialize_submissions_MuteMemberResponse,
  },
  likeVideo: {
    path: '/submissions.SubmissionManager/LikeVideo',
    requestStream: false,
    responseStream: false,
    requestType: submissions_pb.LikeVideoRequest,
    responseType: submissions_pb.LikeVideoResponse,
    requestSerialize: serialize_submissions_LikeVideoRequest,
    requestDeserialize: deserialize_submissions_LikeVideoRequest,
    responseSerialize: serialize_submissions_LikeVideoResponse,
    responseDeserialize: deserialize_submissions_LikeVideoResponse,
  },
  archive: {
    path: '/submissions.SubmissionManager/Archive',
    requestStream: false,
    responseStream: false,
    requestType: submissions_pb.ArchiveRequest,
    responseType: submissions_pb.ArchiveResponse,
    requestSerialize: serialize_submissions_ArchiveRequest,
    requestDeserialize: deserialize_submissions_ArchiveRequest,
    responseSerialize: serialize_submissions_ArchiveResponse,
    responseDeserialize: deserialize_submissions_ArchiveResponse,
  },
};

exports.SubmissionManagerClient = grpc.makeGenericClientConstructor(SubmissionManagerService);
