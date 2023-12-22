import { ChatClient } from '@/proto-gen/proto/ChatServiceClientPb';
import {
    Room,
    RoomStreamResponse,
    StreamMessage,
    User,
    UserStreamResponse,
} from '@/proto-gen/proto/chat_pb';
import { ClientReadableStream } from 'grpc-web';
import { create } from 'zustand';

interface ClientStore {
    client: ChatClient | null;
}

interface UserStore {
    user: User.AsObject | null;
}

interface RoomsStore {
    rooms: Array<Room.AsObject>;
}

interface StreamMessageStore {
    stream: ClientReadableStream<StreamMessage> | null;
    endStream: () => void;
}

interface UserStreamStore {
    stream: ClientReadableStream<UserStreamResponse> | null;
    endStream: () => void;
}

interface RoomStreamStore {
    stream: ClientReadableStream<RoomStreamResponse> | null;
    endStream: () => void;
}

export const useClientStore = create<ClientStore>(() => ({
    client: null,
}));

export const useUserStore = create<UserStore>(() => ({
    user: null,
}));

export const useRoomsStore = create<RoomsStore>(() => ({
    rooms: [],
}));

export const useStreamMessageStore = create<StreamMessageStore>((set) => ({
    stream: null,
    endStream: () =>
        set((state) => {
            state.stream?.cancel();
            return { stream: null };
        }),
}));

export const useUserStreamStore = create<UserStreamStore>((set) => ({
    stream: null,
    endStream: () =>
        set((state) => {
            state.stream?.cancel();
            return { stream: null };
        }),
}));

export const useRoomStreamStore = create<RoomStreamStore>((set) => ({
    stream: null,
    endStream: () =>
        set((state) => {
            state.stream?.cancel();
            return { stream: null };
        }),
}));
