// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var twitch_pb = require('./twitch_pb.js');

function serialize_twitch_JoinRequest(arg) {
  if (!(arg instanceof twitch_pb.JoinRequest)) {
    throw new Error('Expected argument of type twitch.JoinRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_twitch_JoinRequest(buffer_arg) {
  return twitch_pb.JoinRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_twitch_JoinResponse(arg) {
  if (!(arg instanceof twitch_pb.JoinResponse)) {
    throw new Error('Expected argument of type twitch.JoinResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_twitch_JoinResponse(buffer_arg) {
  return twitch_pb.JoinResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TwitchManagerService = exports.TwitchManagerService = {
  joinChannel: {
    path: '/twitch.TwitchManager/JoinChannel',
    requestStream: false,
    responseStream: false,
    requestType: twitch_pb.JoinRequest,
    responseType: twitch_pb.JoinResponse,
    requestSerialize: serialize_twitch_JoinRequest,
    requestDeserialize: deserialize_twitch_JoinRequest,
    responseSerialize: serialize_twitch_JoinResponse,
    responseDeserialize: deserialize_twitch_JoinResponse,
  },
};

exports.TwitchManagerClient = grpc.makeGenericClientConstructor(TwitchManagerService);
