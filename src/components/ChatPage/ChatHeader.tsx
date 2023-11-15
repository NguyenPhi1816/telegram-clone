'use client';
import {
    faEllipsisVertical,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '../Tooltip/Tooltip';
import ChatPageTooltipMenu from './ChatPageTooltipMenu';
import { useState } from 'react';

const ChatHeader = () => {
    const [isShowTooltipMenu, setIsShowTooltipMenu] = useState<boolean>(false);

    const handleToggleTooltipMenu = (): void => {
        setIsShowTooltipMenu((prev) => !prev);
    };

    return (
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
                    <p className="text-sm text-secondary">last seen recently</p>
                </span>
            </div>
            <div className="flex justify-center items-center">
                <button className="button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <Tooltip
                    isShow={isShowTooltipMenu}
                    TippyBox={<ChatPageTooltipMenu />}
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
    );
};

export default ChatHeader;
