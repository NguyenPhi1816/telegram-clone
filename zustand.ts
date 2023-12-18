import { ChatClient } from '@/proto-gen/proto/ChatServiceClientPb';
import { User } from '@/proto-gen/proto/chat_pb';
import { create } from 'zustand';

interface ClientStore {
    client: ChatClient | null;
}

interface UserStore {
    user: User.AsObject | null;
}

export const useClientStore = create<ClientStore>(() => ({
    client: null,
}));

export const useUserStore = create<UserStore>(() => ({
    user: null,
}));
