'use client';
import ChatHeader from '@/components/ChatPage/ChatHeader';
import ChatInput from '@/components/ChatPage/ChatInput';
import ChatSelectToolbar from '@/components/ChatPage/ChatSelectToolbar';
import ConversationPanel from '@/components/ChatPage/ConversationPanel';
import EditChatProfile from '@/components/Sidebar/overlays/edit/EditChatProfile';
import ConfirmationDialog from '@/components/dialogs/ConfirmationDialog';
import Image from 'next/image';
import { useState } from 'react';

const ChatPage = ({ params }: { params: { conversationId: string } }) => {
    const [showEditChatProfile, setShowEditChatProfile] =
        useState<boolean>(false);
    const [showSelectMessage, setShowSelectMessage] = useState<boolean>(false);
    const [selectedMessage, setSelectedMessage] = useState<number[]>([]);
    const [isBlockUser, setIsBlockUser] = useState<boolean>(false);
    const [isShowDltChatComfirm, setIsShowDltChatConfirm] =
        useState<boolean>(false);

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

    const handleBlockUser = (): void => {
        setIsBlockUser(true);
    };

    const handleUnblockUser = (): void => {
        setIsBlockUser(false);
    };

    const handleShowDeleteChat = (): void => {
        setIsShowDltChatConfirm(true);
    };

    // delete chat for current user and target user
    const handleDeleteChatOption1 = (): void => {
        setIsShowDltChatConfirm(false);
    };

    // detele chat for current user
    const handleDeleteChatOption2 = (): void => {
        setIsShowDltChatConfirm(false);
    };

    const handleCloseDltChatConfirm = (): void => {
        setIsShowDltChatConfirm(false);
    };

    return (
        <div className="background flex">
            <div className="flex-1 h-full relative flex flex-col">
                <div className="w-full">
                    <ChatHeader
                        onShowEditChatProfile={handleToggleEditChatProfile}
                        onShowSelectMessage={handleShowSelectMessage}
                        onBlockUser={handleBlockUser}
                        onUnblockUser={handleUnblockUser}
                        onDeleteChat={handleShowDeleteChat}
                    />
                </div>
                <div className="flex-1">
                    <div
                        style={
                            {
                                '--input-height': isBlockUser ? '0px' : '84px',
                                height: 'calc(100vh - 56px - var(--input-height))',
                            } as React.CSSProperties
                        }
                    >
                        <ConversationPanel
                            showSelectMessage={showSelectMessage}
                            selectedMessage={selectedMessage}
                            onSelectMessage={handleSelectMessage}
                        />
                    </div>
                </div>
                <div>
                    <div className="mx-auto w-[45.5rem]">
                        {!showSelectMessage && !isBlockUser && <ChatInput />}
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
            {showEditChatProfile && (
                <EditChatProfile onClose={handleToggleEditChatProfile} />
            )}
            {isShowDltChatComfirm && (
                <ConfirmationDialog
                    title={
                        <div className="flex items-center">
                            <Image
                                className="w-8 h-8 object-cover rounded-full"
                                src="/test-image.jpg"
                                alt="User image"
                                width={100}
                                height={100}
                            />
                            <h3 className="ml-3 text-lg font-bold">
                                Delete Chat
                            </h3>
                        </div>
                    }
                    message={
                        <div className="mt-2 mb-4 font-medium">
                            <p>Permanently delete the chat with Username?</p>
                        </div>
                    }
                    options={
                        <div className="flex flex-col items-end">
                            <button
                                className="dialog-btn dialog-btn-danger"
                                onClick={handleDeleteChatOption1}
                            >
                                DELETE FOR ME AND USERNAME
                            </button>
                            <button
                                className="dialog-btn dialog-btn-danger"
                                onClick={handleDeleteChatOption2}
                            >
                                DELETE JUST FOR ME
                            </button>
                            <button
                                className="dialog-btn dialog-btn-infor"
                                onClick={handleCloseDltChatConfirm}
                            >
                                CANCEL
                            </button>
                        </div>
                    }
                />
            )}
        </div>
    );
};

export default ChatPage;
