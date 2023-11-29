'use client';
import { useState } from 'react';
import SidebarChatList from './lists/chatList/SidebarChatList';
import SidebarHeader from './SidebarHeader';
import SidebarContactList from './lists/contactList/SidebarContactList';
import SidebarSettingOverlay from './overlays/settings/SidebarSettingOverlay';

const Sidebar = () => {
    const [showContacts, setShowContacts] = useState<boolean>(false);
    const [showSettings, setShowSettings] = useState<boolean>(false);

    const handleShowContacts = (): void => {
        setShowContacts(true);
    };

    const handleHideContacts = (): void => {
        setShowContacts(false);
    };

    const handleToggleSettings = (): void => {
        setShowSettings((prev) => !prev);
    };

    return (
        <nav className="h-[100vh] w-[25vw] border-r-[1px] border-r-secondary relative">
            <div className="flex flex-col h-full bg-background">
                <div className="flex pt-[6px] pb-2 px-[13px] text-secondary">
                    <SidebarHeader
                        onShowContacts={handleShowContacts}
                        onHideContacts={handleHideContacts}
                        onShowSettings={handleToggleSettings}
                    />
                </div>
                <div className="flex-1 overflow-hidden">
                    {!showContacts && <SidebarChatList />}
                    {showContacts && <SidebarContactList />}
                </div>
            </div>
            {showSettings && (
                <SidebarSettingOverlay onClose={handleToggleSettings} />
            )}
        </nav>
    );
};

export default Sidebar;
