'use client';
import { usePathname } from 'next/navigation';
import SidebarChatItem from './SidebarChatItem';

const SidebarChatList = () => {
    const pathName = usePathname();

    return (
        <div className="w-full h-full p-2 overflow-y-scroll">
            <ul>
                {Array.from({ length: 20 }, (_, index) => ({ id: index })).map(
                    (item) => (
                        <li key={item.id}>
                            <SidebarChatItem
                                data={item}
                                isSelected={
                                    pathName.replace('/', '') ===
                                    item.id.toString()
                                }
                                isUnread={item.id % 2 === 0}
                            />
                        </li>
                    ),
                )}
            </ul>
        </div>
    );
};

export default SidebarChatList;
