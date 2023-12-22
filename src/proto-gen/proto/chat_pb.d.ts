import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class RegisterRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  getName(): string;
  setName(value: string): RegisterRequest;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    username: string,
    password: string,
    name: string,
    avatarUrl: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getId(): number;
  setId(value: number): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    id: number,
  }
}

export class InitiateRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): InitiateRequest;

  getPassword(): string;
  setPassword(value: string): InitiateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateRequest): InitiateRequest.AsObject;
  static serializeBinaryToWriter(message: InitiateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateRequest;
  static deserializeBinaryFromReader(message: InitiateRequest, reader: jspb.BinaryReader): InitiateRequest;
}

export namespace InitiateRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class InitiateResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): InitiateResponse;
  hasUser(): boolean;
  clearUser(): InitiateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateResponse): InitiateResponse.AsObject;
  static serializeBinaryToWriter(message: InitiateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateResponse;
  static deserializeBinaryFromReader(message: InitiateResponse, reader: jspb.BinaryReader): InitiateResponse;
}

export namespace InitiateResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class MessageRequest extends jspb.Message {
  getSenderId(): number;
  setSenderId(value: number): MessageRequest;

  getRoomId(): number;
  setRoomId(value: number): MessageRequest;

  getMessage(): string;
  setMessage(value: string): MessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MessageRequest): MessageRequest.AsObject;
  static serializeBinaryToWriter(message: MessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageRequest;
  static deserializeBinaryFromReader(message: MessageRequest, reader: jspb.BinaryReader): MessageRequest;
}

export namespace MessageRequest {
  export type AsObject = {
    senderId: number,
    roomId: number,
    message: string,
  }
}

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): User;

  getName(): string;
  setName(value: string): User;

  getStatus(): Status;
  setStatus(value: Status): User;

  getAvatar(): string;
  setAvatar(value: string): User;

  getRole(): Role;
  setRole(value: Role): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    name: string,
    status: Status,
    avatar: string,
    role: Role,
  }
}

export class Account extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): Account;

  getUsername(): string;
  setUsername(value: string): Account;

  getPassword(): string;
  setPassword(value: string): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    userId: number,
    username: string,
    password: string,
  }
}

export class UserStreamResponse extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): UserStreamResponse;
  clearUsersList(): UserStreamResponse;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserStreamResponse): UserStreamResponse.AsObject;
  static serializeBinaryToWriter(message: UserStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserStreamResponse;
  static deserializeBinaryFromReader(message: UserStreamResponse, reader: jspb.BinaryReader): UserStreamResponse;
}

export namespace UserStreamResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class StreamRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): StreamRequest;

  getRoomId(): number;
  setRoomId(value: number): StreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamRequest): StreamRequest.AsObject;
  static serializeBinaryToWriter(message: StreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamRequest;
  static deserializeBinaryFromReader(message: StreamRequest, reader: jspb.BinaryReader): StreamRequest;
}

export namespace StreamRequest {
  export type AsObject = {
    userId: number,
    roomId: number,
  }
}

export class AllUserRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): AllUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllUserRequest): AllUserRequest.AsObject;
  static serializeBinaryToWriter(message: AllUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllUserRequest;
  static deserializeBinaryFromReader(message: AllUserRequest, reader: jspb.BinaryReader): AllUserRequest;
}

export namespace AllUserRequest {
  export type AsObject = {
    userId: number,
  }
}

export class LogOutRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): LogOutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogOutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogOutRequest): LogOutRequest.AsObject;
  static serializeBinaryToWriter(message: LogOutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogOutRequest;
  static deserializeBinaryFromReader(message: LogOutRequest, reader: jspb.BinaryReader): LogOutRequest;
}

export namespace LogOutRequest {
  export type AsObject = {
    userId: number,
  }
}

export class StreamMessage extends jspb.Message {
  getSenderId(): number;
  setSenderId(value: number): StreamMessage;

  getSenderName(): string;
  setSenderName(value: string): StreamMessage;

  getSenderAvatar(): string;
  setSenderAvatar(value: string): StreamMessage;

  getMessage(): string;
  setMessage(value: string): StreamMessage;

  getCreatedat(): number;
  setCreatedat(value: number): StreamMessage;

  getRoomId(): number;
  setRoomId(value: number): StreamMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMessage.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMessage): StreamMessage.AsObject;
  static serializeBinaryToWriter(message: StreamMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMessage;
  static deserializeBinaryFromReader(message: StreamMessage, reader: jspb.BinaryReader): StreamMessage;
}

export namespace StreamMessage {
  export type AsObject = {
    senderId: number,
    senderName: string,
    senderAvatar: string,
    message: string,
    createdat: number,
    roomId: number,
  }
}

export class Room extends jspb.Message {
  getId(): number;
  setId(value: number): Room;

  getImageurl(): string;
  setImageurl(value: string): Room;

  getName(): string;
  setName(value: string): Room;

  getDescription(): string;
  setDescription(value: string): Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room.AsObject;
  static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
  static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room;
  static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
  export type AsObject = {
    id: number,
    imageurl: string,
    name: string,
    description: string,
  }
}

export class RoomRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): RoomRequest;

  getImageurl(): string;
  setImageurl(value: string): RoomRequest;

  getName(): string;
  setName(value: string): RoomRequest;

  getDescription(): string;
  setDescription(value: string): RoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoomRequest): RoomRequest.AsObject;
  static serializeBinaryToWriter(message: RoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomRequest;
  static deserializeBinaryFromReader(message: RoomRequest, reader: jspb.BinaryReader): RoomRequest;
}

export namespace RoomRequest {
  export type AsObject = {
    userId: number,
    imageurl: string,
    name: string,
    description: string,
  }
}

export class RoomResponse extends jspb.Message {
  getId(): number;
  setId(value: number): RoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RoomResponse): RoomResponse.AsObject;
  static serializeBinaryToWriter(message: RoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomResponse;
  static deserializeBinaryFromReader(message: RoomResponse, reader: jspb.BinaryReader): RoomResponse;
}

export namespace RoomResponse {
  export type AsObject = {
    id: number,
  }
}

export class RoomStreamRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): RoomStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoomStreamRequest): RoomStreamRequest.AsObject;
  static serializeBinaryToWriter(message: RoomStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomStreamRequest;
  static deserializeBinaryFromReader(message: RoomStreamRequest, reader: jspb.BinaryReader): RoomStreamRequest;
}

export namespace RoomStreamRequest {
  export type AsObject = {
    userId: number,
  }
}

export class RoomStreamResponse extends jspb.Message {
  getRoomsList(): Array<Room>;
  setRoomsList(value: Array<Room>): RoomStreamResponse;
  clearRoomsList(): RoomStreamResponse;
  addRooms(value?: Room, index?: number): Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RoomStreamResponse): RoomStreamResponse.AsObject;
  static serializeBinaryToWriter(message: RoomStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomStreamResponse;
  static deserializeBinaryFromReader(message: RoomStreamResponse, reader: jspb.BinaryReader): RoomStreamResponse;
}

export namespace RoomStreamResponse {
  export type AsObject = {
    roomsList: Array<Room.AsObject>,
  }
}

export enum Status { 
  UNKOWN = 0,
  ONLINE = 1,
  OFFLINE = 2,
}
export enum Role { 
  ADMIN = 0,
  USER = 1,
}
