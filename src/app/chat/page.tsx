'use client';
import { useEffect, useState } from 'react';
import {
    StreamMessage,
    StreamRequest,
    User,
    UserStreamResponse,
} from '../../proto-gen/proto/chat_pb';
import { useClientStore, useUserStore } from '../../../zustand';

export default function Chat() {
    const [msgs, setMsgs] = useState<Array<StreamMessage.AsObject>>([]);
    const [users, setUsers] = useState<Array<User.AsObject>>([]);
    const [user, setUser] = useState<User.AsObject | null>(null);

    useEffect(() => {
        setUser(useUserStore.getState().user);
    }, []);

    useEffect(() => {
        const client = useClientStore.getState().client!;
        if (!user) return;
        const req = new StreamRequest();
        req.setId(user.id);
        (() => {
            const stream = client.chatStream(req, {});
            stream.on('data', (chunk) => {
                const msg = (chunk as StreamMessage).toObject();
                setMsgs((prev) => [...prev, msg]);
            });
        })();

        (() => {
            const stream = client.userStream(req, {});
            stream.on('data', (chunk) => {
                const users = (chunk as UserStreamResponse).toObject()
                    .usersList;
                setUsers(users);
            });
        })();
    }, [user]);

    return (
        <div className="max-w-[75vw] background">
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="font-bold text-lg">
                    Please choose a room to join the Chat! Have fun.
                </h1>
            </div>
        </div>
    );
}
