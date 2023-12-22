'use client';
import React, { useEffect, useRef, useState } from 'react';
import MessageContainer, { MessageContainerType } from './MessageContainer';
import ScrollToBottom from './ScrollToBottom';
import { StreamMessage, User } from '@/proto-gen/proto/chat_pb';
import { useUserStore } from '../../../zustand';

interface ConversationPanelProps {
    msgs: Array<StreamMessage.AsObject>;
}

const ConversationPanel: React.FC<ConversationPanelProps> = ({ msgs }) => {
    const conversationPanelRef = useRef<HTMLDivElement | null>(null);
    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);
    const [user, setUser] = useState<User.AsObject | null>(null);

    const handleScrollToBottom = () => {
        if (conversationPanelRef.current) {
            const scrollContainer = conversationPanelRef.current;
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const panel = conversationPanelRef.current;
            if (panel) {
                const isAtBottom =
                    panel.scrollTop + panel.scrollHeight === panel.scrollHeight;

                setIsShowBtn(!isAtBottom);
            }
        };

        const panel = conversationPanelRef.current;
        if (panel) {
            panel.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (panel) {
                panel.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        const _user = useUserStore.getState().user;
        setUser(_user);
    }, [useUserStore.getState().user]);

    return (
        <div
            ref={conversationPanelRef}
            className="flex flex-col-reverse h-full overflow-y-scroll"
        >
            <ul className="w-full flex flex-col justify-end items-end">
                {msgs &&
                    user &&
                    msgs.map((msg, index) => (
                        <li key={index} className="w-full py-1 mb-[6px]">
                            <div className="mx-auto px-4 w-[45.5rem] flex items-end">
                                <MessageContainer
                                    message={msg}
                                    type={
                                        msg.senderId === user.id
                                            ? MessageContainerType.CURRENT_USER
                                            : MessageContainerType.OTHER_USER
                                    }
                                />
                            </div>
                        </li>
                    ))}
            </ul>
            <ScrollToBottom isShow={isShowBtn} onClick={handleScrollToBottom} />
        </div>
    );
};

export default ConversationPanel;
