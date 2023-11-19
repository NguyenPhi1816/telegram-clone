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

interface ChatHeaderProps {
    onShowEditChatProfile: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onShowEditChatProfile }) => {
    const [isShowTooltipMenu, setIsShowTooltipMenu] = useState<boolean>(false);

    const handleToggleTooltipMenu = (): void => {
        setIsShowTooltipMenu((prev) => !prev);
    };

    const handleShowEditChatProfile = (): void => {
        setIsShowTooltipMenu(false);
        onShowEditChatProfile();
    };

    return (
        <>
            <div className="flex py-1 pl-[23px] pr-[13px] bg-background">
                <div className="flex-1 flex items-center justify-start">
                    <button className="w-10 h-10 mr-[10px]">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src="./test-image.jpg"
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
                                />
                                <TooltipItem
                                    icon={<FontAwesomeIcon icon={faBan} />}
                                    content="Block user"
                                />
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
