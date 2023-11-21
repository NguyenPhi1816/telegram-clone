'use client';
import ChatHeader from '@/components/ChatPage/ChatHeader';
import ChatInput from '@/components/ChatPage/ChatInput';
import ChatSelectToolbar from '@/components/ChatPage/ChatSelectToolbar';
import ConversationPanel from '@/components/ChatPage/ConversationPanel';
import RightSidebar from '@/components/Sidebar/RightSidebar';
import EditChatProfile from '@/components/Sidebar/overlays/edit/EditChatProfile';
import { useState } from 'react';

const ChatPage = ({ params }: { params: { conversationId: string } }) => {
    const [showEditChatProfile, setShowEditChatProfile] =
        useState<boolean>(false);
    const [showSelectMessage, setShowSelectMessage] = useState<boolean>(false);
    const [selectedMessage, setSelectedMessage] = useState<number[]>([]);

    const handleToggleEditChatProfile = (): void => {
        setShowEditChatProfile((prev) => !prev);
    };

    const handleShowSelectMessage = (): void => {
        setShowSelectMessage(true);
    };

    const handleHideSelectMessage = (): void => {
        setShowSelectMessage(false);
    };

    const handleSelectMessage = (id: number): void => {
        if (selectedMessage.indexOf(id) === -1)
            setSelectedMessage((prev) => [...prev, id]);
        else setSelectedMessage((prev) => prev.filter((item) => item !== id));
    };

    const handleClearSelectedMesssage = (): void => {
        setSelectedMessage([]);
    };

    return (
        <div className="background flex">
            <div className="flex-1 h-full relative flex flex-col">
                <div className="w-full">
                    <ChatHeader
                        onShowEditChatProfile={handleToggleEditChatProfile}
                        onShowSelectMessage={handleShowSelectMessage}
                    />
                </div>
                <div className="flex-1">
                    <ConversationPanel
                        showSelectMessage={showSelectMessage}
                        selectedMessage={selectedMessage}
                        onSelectMessage={handleSelectMessage}
                    />
                </div>
                <div>
                    <div className="mx-auto w-[45.5rem]">
                        {!showSelectMessage && <ChatInput />}
                        {showSelectMessage && (
                            <ChatSelectToolbar
                                selectedMessage={selectedMessage}
                                onClearSelectedMessage={
                                    handleClearSelectedMesssage
                                }
                                onClose={handleHideSelectMessage}
                            />
                        )}
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
