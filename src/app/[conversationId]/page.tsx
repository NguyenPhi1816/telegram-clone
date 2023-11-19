'use client';
import ChatHeader from '@/components/ChatPage/ChatHeader';
import ChatInput from '@/components/ChatPage/ChatInput';
import ConversationPanel from '@/components/ChatPage/ConversationPanel';
import RightSidebar from '@/components/Sidebar/RightSidebar';
import EditChatProfile from '@/components/Sidebar/overlays/edit/EditChatProfile';
import { useState } from 'react';

const ChatPage = ({ params }: { params: { conversationId: string } }) => {
    const [showEditChatProfile, setShowEditChatProfile] =
        useState<boolean>(false);

    const handleToggleEditChatProfile = (): void => {
        setShowEditChatProfile((prev) => !prev);
    };

    return (
        <div className="background flex">
            <div className="flex-1 h-full relative flex flex-col">
                <div className="w-full">
                    <ChatHeader
                        onShowEditChatProfile={handleToggleEditChatProfile}
                    />
                </div>
                <div className="flex-1">
                    <ConversationPanel />
                </div>
                <div>
                    <div className="mx-auto w-[45.5rem]">
                        <ChatInput />
                    </div>
                </div>
            </div>
            <RightSidebar>
                {showEditChatProfile && (
                    <EditChatProfile onClose={handleToggleEditChatProfile} />
                )}
            </RightSidebar>
        </div>
    );
};

export default ChatPage;
