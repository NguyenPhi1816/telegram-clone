import {
    faArrowLeft,
    faBell,
    faCircleQuestion,
    faCommentDots,
    faDatabase,
    faEllipsisVertical,
    faFolderClosed,
    faGear,
    faLanguage,
    faLaptop,
    faLock,
    faNoteSticky,
    faPen,
    faRocket,
    faShield,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SidebarSettingItem from '../SidebarSettingItem';

interface SidebarSettingOverlayProps {
    onClose: () => void;
}

const SidebarSettingOverlay: React.FC<SidebarSettingOverlayProps> = ({
    onClose,
}) => {
    return (
        <div className="w-full h-full absolute top-0 left-0 bg-background">
            <div className="h-full flex flex-col text-secondary">
                <div className=" px-[13px] py-[8px] flex items-center w-full">
                    <button className="button" onClick={onClose}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div className="flex-1">
                        <div className="w-full h-full flex justify-between items-center">
                            <h3 className="pl-[22px] text-lg font-semibold text-white">
                                Settings
                            </h3>
                            <div>
                                <button className="button">
                                    <FontAwesomeIcon icon={faPen} />
                                </button>
                                <button className="button">
                                    <FontAwesomeIcon
                                        icon={faEllipsisVertical}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 overflow-hidden">
                    <div className="h-full w-full overflow-y-scroll">
                        <div className="relative">
                            <img src="./test-image.jpg" alt="Thumbnail" />
                            <div className="absolute bottom-2 left-6">
                                <h3 className="font-semibold text-lg text-white">
                                    Phi Nguyen
                                </h3>
                                <p className="text-sm">
                                    last seen yesterday at 19:48
                                </p>
                            </div>
                        </div>
                        <div className="p-2">
                            <SidebarSettingItem
                                content={
                                    <p className="truncate">General Settings</p>
                                }
                                icon={<FontAwesomeIcon icon={faGear} />}
                            />
                            <SidebarSettingItem
                                content={
                                    <p className="truncate">
                                        Animations and Performance
                                    </p>
                                }
                                icon={<FontAwesomeIcon icon={faRocket} />}
                            />
                            <SidebarSettingItem
                                content={
                                    <p className="truncate">Notifications</p>
                                }
                                icon={<FontAwesomeIcon icon={faBell} />}
                            />
                            <SidebarSettingItem
                                content={
                                    <p className="truncate">Data and Storage</p>
                                }
                                icon={<FontAwesomeIcon icon={faDatabase} />}
                            />
                            <SidebarSettingItem
                                content={
                                    <p className="truncate">
                                        Privacy and Security
                                    </p>
                                }
                                icon={<FontAwesomeIcon icon={faLock} />}
                            />
                            <SidebarSettingItem
                                content={
                                    <p className="truncate">Chat Folders</p>
                                }
                                icon={<FontAwesomeIcon icon={faFolderClosed} />}
                            />
                            <SidebarSettingItem
                                content={
                                    <div className=" w-full flex justify-between">
                                        <p className="truncate">Devices</p>
                                        <p>12</p>
                                    </div>
                                }
                                icon={<FontAwesomeIcon icon={faLaptop} />}
                            />
                            <SidebarSettingItem
                                content={<p className="truncate">Language</p>}
                                icon={<FontAwesomeIcon icon={faLanguage} />}
                            />
                            <SidebarSettingItem
                                content={
                                    <p className="truncate">
                                        Stickers and Emoji
                                    </p>
                                }
                                icon={<FontAwesomeIcon icon={faNoteSticky} />}
                            />
                            <SidebarSettingItem
                                content={
                                    <p className="truncate">Telegram Premium</p>
                                }
                                icon={<FontAwesomeIcon icon={faStar} />}
                            />
                            <SidebarSettingItem
                                content={
                                    <p className="truncate">Ask a Question</p>
                                }
                                icon={<FontAwesomeIcon icon={faCommentDots} />}
                            />
                            <SidebarSettingItem
                                content={
                                    <p className="truncate">Telegram FAQ</p>
                                }
                                icon={
                                    <FontAwesomeIcon icon={faCircleQuestion} />
                                }
                            />
                            <SidebarSettingItem
                                content={
                                    <p className="truncate">Privacy Policy</p>
                                }
                                icon={<FontAwesomeIcon icon={faShield} />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarSettingOverlay;
