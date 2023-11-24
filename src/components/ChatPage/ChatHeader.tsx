'use client';
import {
    faBan,
    faCircleCheck,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPen,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '../Tooltip/Tooltip';
import React, { useState } from 'react';
import TooltipItem from '../Tooltip/TooltipItem';
import Image from 'next/image';

interface ChatHeaderProps {
    onShowEditChatProfile: () => void;
    onShowSelectMessage: () => void;
    onBlockUser: () => void;
    onUnblockUser: () => void;
    onDeleteChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
    onShowEditChatProfile,
    onShowSelectMessage,
    onBlockUser,
    onUnblockUser,
    onDeleteChat,
}) => {
    const [isShowTooltipMenu, setIsShowTooltipMenu] = useState<boolean>(false);
    const [isBlockUser, setIsBlockUser] = useState<boolean>(false);

    const handleToggleTooltipMenu = (): void => {
        setIsShowTooltipMenu((prev) => !prev);
    };

    const handleShowEditChatProfile = (): void => {
        setIsShowTooltipMenu(false);
        onShowEditChatProfile();
    };

    const handleShowSelectMessage = (): void => {
        setIsShowTooltipMenu(false);
        onShowSelectMessage();
    };

    const handleBlockUser = (): void => {
        setIsShowTooltipMenu(false);
        setIsBlockUser(true);
        onBlockUser();
    };

    const handleUnblockUser = (): void => {
        setIsShowTooltipMenu(false);
        setIsBlockUser(false);
        onUnblockUser();
    };

    const handleDeleteChat = (): void => {
        setIsShowTooltipMenu(false);
        onDeleteChat();
    };

    return (
        <>
            <div className="flex py-1 pl-[23px] pr-[13px] bg-background">
                <div className="flex-1 flex items-center justify-start">
                    <button className="w-10 h-10 mr-[10px]">
                        <Image
                            className="w-full h-full object-cover rounded-full"
                            src="/test-image.jpg"
                            alt="User image"
                            width={100}
                            height={100}
                        />
                    </button>
                    <span>
                        <h3 className="font-bold text-lg">Username</h3>
                        <p className="text-sm text-secondary">
                            last seen recently
                        </p>
                    </span>
                </div>
                <div className="flex justify-center items-center">
                    {isBlockUser && (
                        <button
                            onClick={handleUnblockUser}
                            className="mr-2 py-[7px] px-[22px] text-sm font-semibold rounded-lg bg-primary"
                        >
                            UNBLOCK USER
                        </button>
                    )}
                    <button className="button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <Tooltip
                        isShow={isShowTooltipMenu}
                        TippyBox={
                            <>
                                <TooltipItem
                                    icon={<FontAwesomeIcon icon={faPen} />}
                                    content="Edit"
                                    onClick={handleShowEditChatProfile}
                                />
                                <TooltipItem
                                    icon={
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    }
                                    content="Select messages"
                                    onClick={handleShowSelectMessage}
                                />
                                {!isBlockUser && (
                                    <TooltipItem
                                        icon={<FontAwesomeIcon icon={faBan} />}
                                        content="Block user"
                                        onClick={handleBlockUser}
                                    />
                                )}
                                {isBlockUser && (
                                    <TooltipItem
                                        icon={<FontAwesomeIcon icon={faBan} />}
                                        content="Unblock user"
                                        onClick={handleUnblockUser}
                                    />
                                )}
                                <div className="my-1 w-full border-t-[1px] border-t-secondary"></div>
                                <TooltipItem
                                    icon={
                                        <FontAwesomeIcon
                                            className="text-red-500"
                                            icon={faTrash}
                                        />
                                    }
                                    content={
                                        <p className="text-red-500">
                                            Delete chat
                                        </p>
                                    }
                                    onClick={handleDeleteChat}
                                />
                            </>
                        }
                        onClickOutside={handleToggleTooltipMenu}
                        className="mr-[10px] mt-[7px] min-w-[13.5rem]"
                    >
                        <button
                            className="button"
                            style={
                                isShowTooltipMenu
                                    ? {
                                          backgroundColor:
                                              'var(--background-color-hover)',
                                      }
                                    : {}
                            }
                            onClick={handleToggleTooltipMenu}
                        >
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Tooltip>
                </div>
            </div>
        </>
    );
};

export default ChatHeader;
