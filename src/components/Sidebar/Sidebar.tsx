'use client';

import { useEffect, useState } from 'react';
import {
    faArrowLeft,
    faBars,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidebarChatList from './SidebarChatList';

const Sidebar = () => {
    const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);

    const handleSearchFocused = (): void => {
        setIsSearchFocused(true);
    };

    const handleSearchBlurred = (): void => {
        setIsSearchFocused(false);
    };

    return (
        <nav className="h-[100vh] w-[25vw] border-r-[1px] border-r-secondary">
            <div className="flex flex-col h-full bg-background">
                <div className="flex pt-[6px] pb-2 px-[13px] text-secondary">
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
                                onClick={handleSearchBlurred}
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
                    <div className="relative ml-[13px]">
                        <input
                            className="input px-[43px] pt-[6px] pb-[7px] peer"
                            placeholder="Search"
                            onFocus={handleSearchFocused}
                        />
                        <span className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-4 peer-focus:text-primary">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </div>
                </div>
                <div className="flex-1 overflow-hidden">
                    <SidebarChatList />
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
