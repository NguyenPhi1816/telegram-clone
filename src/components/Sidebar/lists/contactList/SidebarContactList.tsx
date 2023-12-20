import React from 'react';
import SidebarContactItem from './SidebarContactItem';
import { User } from '@/proto-gen/proto/chat_pb';

interface SidebarContactListProps {
    userList: Array<User.AsObject>;
}

const SidebarContactList: React.FC<SidebarContactListProps> = ({
    userList,
}) => {
    return (
        <div className="w-full h-full p-2 overflow-y-scroll">
            <ul>
                {userList?.map((user) => (
                    <li key={user.id}>
                        <SidebarContactItem data={user} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarContactList;
