'use client';
import { usePathname } from 'next/navigation';
import SidebarChatItem from './SidebarChatItem';

const SidebarChatList = () => {
    const pathName = usePathname();

    return (
        <div className="w-full h-full p-2 overflow-y-scroll">
            <ul>
                <li>
                    <SidebarChatItem
                        data={{ id: 0 }}
                        isSelected={
                            pathName.replace('/', '') ===
                            { id: 0 }.id.toString()
                        }
                        isUnread={{ id: 0 }.id % 2 === 0}
                    />
                </li>
            </ul>
        </div>
    );
};

export default SidebarChatList;
