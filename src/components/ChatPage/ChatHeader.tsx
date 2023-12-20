'use client';
import { faEllipsisVertical, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '../Tooltip/Tooltip';
import React, { useState } from 'react';
import TooltipItem from '../Tooltip/TooltipItem';
import Image from 'next/image';

interface ChatHeaderProps {
    onShowMembers: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onShowMembers }) => {
    const [isShowTooltipMenu, setIsShowTooltipMenu] = useState<boolean>(false);

    const handleToggleTooltipMenu = (): void => {
        setIsShowTooltipMenu((prev) => !prev);
    };

    const handleShowMembers = (): void => {
        setIsShowTooltipMenu(false);
        onShowMembers();
    };

    return (
        <>
            <div className="flex py-1 pl-[23px] pr-[13px] bg-background">
                <div className="flex-1 flex items-center justify-start">
                    <button className="w-10 h-10 mr-[10px]">
                        <Image
                            className="w-full h-full object-cover rounded-full"
                            src="/test-image.png"
                            alt="User image"
                            width={100}
                            height={100}
                        />
                    </button>
                    <span>
                        <h3 className="font-bold text-lg">Room Chat 0</h3>
                        <p className="text-sm text-secondary">
                            This room is about playing game
                        </p>
                    </span>
                </div>
                <div className="flex justify-center items-center">
                    <Tooltip
                        isShow={isShowTooltipMenu}
                        TippyBox={
                            <>
                                <TooltipItem
                                    icon={<FontAwesomeIcon icon={faUsers} />}
                                    content="See members"
                                    onClick={handleShowMembers}
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
