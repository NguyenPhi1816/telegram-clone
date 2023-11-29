'use client';
import React, { useEffect, useRef, useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faBars,
    faGear,
    faMoon,
    faSearch,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import TooltipItem from '../Tooltip/TooltipItem';
import Search from './Search';

interface SidebarHeaderProps {
    onShowContacts: () => void;
    onHideContacts: () => void;
    onShowSettings: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({
    onShowContacts,
    onHideContacts,
    onShowSettings,
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
    const [isShowTooltipMenu, setIsShowTooltipMenu] = useState<boolean>(false);

    const handleSearchFocused = (): void => {
        setIsSearchFocused(true);
    };

    const handleSearchBlurred = (): void => {
        setIsSearchFocused(false);
        onHideContacts();
    };

    const handleToggleTooltipMenu = (): void => {
        setIsShowTooltipMenu((prev) => !prev);
    };

    const handleShowContacts = (): void => {
        setIsSearchFocused(true);
        setIsShowTooltipMenu(false);
        onShowContacts();
    };

    const handleShowSettings = (): void => {
        setIsShowTooltipMenu(false);
        onShowSettings();
    };

    useEffect(() => {
        if (isSearchFocused) inputRef.current?.focus();
    }, [isSearchFocused]);

    return (
        <>
            <Tooltip
                TippyBox={
                    <>
                        <TooltipItem
                            icon={<FontAwesomeIcon icon={faUser} />}
                            content="Contacts"
                            onClick={handleShowContacts}
                        />
                        <TooltipItem
                            icon={<FontAwesomeIcon icon={faGear} />}
                            content="Settings"
                            onClick={handleShowSettings}
                        />
                        <TooltipItem
                            icon={<FontAwesomeIcon icon={faMoon} />}
                            content={
                                <div className="w-full flex justify-between items-center">
                                    <p>Night mode</p>
                                    <span className="flex items-center justify-end w-[26px] h-[11px] bg-primary rounded-full">
                                        <span className="block w-[14px] h-[14px] bg-black rounded-full border-primary border-2"></span>
                                    </span>
                                </div>
                            }
                        />
                    </>
                }
                isShow={isShowTooltipMenu}
                onClickOutside={handleToggleTooltipMenu}
                className="ml-[10px]"
            >
                <div
                    id="sidebar-header-btn"
                    style={{
                        animation: isSearchFocused
                            ? 'rotateFrom180degTo360deg 0.2s forwards linear'
                            : 'rotateNega180deg 0.2s forwards linear',
                    }}
                >
                    {!isSearchFocused ? (
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
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    ) : (
                        <button
                            className="button"
                            onClick={handleSearchBlurred}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                    )}
                </div>
            </Tooltip>
            <div>
                <Search onSearchFocused={handleSearchFocused} />
            </div>
        </>
    );
};

export default SidebarHeader;
