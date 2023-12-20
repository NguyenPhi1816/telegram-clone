'use client';
import ChatHeader from '@/components/ChatPage/ChatHeader';
import ChatInput from '@/components/ChatPage/ChatInput';
import ConversationPanel from '@/components/ChatPage/ConversationPanel';
import EditChatProfile from '@/components/Sidebar/overlays/Members';
import { useEffect, useState } from 'react';

import {
    StreamMessage,
    StreamRequest,
    User,
} from '../../../proto-gen/proto/chat_pb';
import {
    useClientStore,
    useStreamMessageStore,
    useUserStore,
} from '../../../../zustand';
import { useRouter } from 'next/navigation';

const ChatPage = ({ params }: { params: { conversationId: string } }) => {
    const router = useRouter();
    const [isShowMembers, setIsShowMembers] = useState<boolean>(false);
    const [msgs, setMsgs] = useState<Array<StreamMessage.AsObject>>([]);
    const [user, setUser] = useState<User.AsObject | null>(null);

    const handleToggleMembers = (): void => {
        setIsShowMembers((prev) => !prev);
    };

    useEffect(() => {
        const user = useUserStore.getState().user;
        if (!user) return router.push('/login');
    }, []);

    useEffect(() => {
        setUser(useUserStore.getState().user);
    }, []);

    useEffect(() => {
        const client = useClientStore.getState().client;
        if (!user || !client) return;
        const req = new StreamRequest();
        req.setId(user.id);

        const chatStream = client.chatStream(req, {});
        useStreamMessageStore.setState({ stream: chatStream });
        chatStream.on('data', (chunk) => {
            const msg = (chunk as StreamMessage).toObject();
            setMsgs((prev) => [...prev, msg]);
        });

        return () => {
            chatStream.cancel();
        };
    }, [user, useClientStore]);

    return (
        <div className="background flex max-w-[75vw]">
            <div className="flex-1 h-full relative flex flex-col">
                <div className="w-full">
                    <ChatHeader onShowMembers={handleToggleMembers} />
                </div>
                <div className="flex-1">
                    <div
                        style={
                            {
                                '--input-height': '84px',
                                height: 'calc(100vh - 56px - var(--input-height))',
                            } as React.CSSProperties
                        }
                    >
                        <ConversationPanel msgs={msgs} />
                    </div>
                </div>
                <div>
                    <div className="mx-auto w-[45.5rem]">{<ChatInput />}</div>
                </div>
            </div>
            {isShowMembers && <EditChatProfile onClose={handleToggleMembers} />}
        </div>
    );
};

export default ChatPage;
