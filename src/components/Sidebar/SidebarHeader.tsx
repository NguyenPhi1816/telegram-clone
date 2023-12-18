'use client';
import Avatar from '../Avatar';
import { useUserStore } from '../../../zustand';
import { useEffect, useState } from 'react';
import { User } from '@/proto-gen/proto/chat_pb';

const SidebarHeader = () => {
    let [user, setUser] = useState<User.AsObject | null>(null);

    useEffect(() => {
        setUser(useUserStore.getState().user);
    }, []);

    return (
        <div className="py-2 w-full flex items-center">
            <Avatar className="mb-0 mt-0 w-[40px]" url={user?.avatar} />
            <div className="ml-5">
                <p>Welcome back</p>
                <h3 className="font-bold text-lg text-primary">{user?.name}</h3>
            </div>
        </div>
    );
};

export default SidebarHeader;
