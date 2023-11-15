'use client';
import { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import SidebarTooltipMenu from './SidebarTooltipMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faBars,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';

const SidebarHeader = () => {
    const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
    const [isShowTooltipMenu, setIsShowTooltipMenu] = useState<boolean>(false);

    const handleSearchFocused = (): void => {
        setIsSearchFocused(true);
    };

    const handleSearchBlurred = (): void => {
        setIsSearchFocused(false);
    };

    const handleToggleTooltipMenu = (): void => {
        setIsShowTooltipMenu((prev) => !prev);
    };

    return (
        <>
            <Tooltip
                TippyBox={<SidebarTooltipMenu />}
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
        </>
    );
};

export default SidebarHeader;
