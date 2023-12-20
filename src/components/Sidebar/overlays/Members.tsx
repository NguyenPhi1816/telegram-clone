'use client';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import SidebarContactList from '../lists/contactList/SidebarContactList';
import {
    useClientStore,
    useUserStore,
    useUserStreamStore,
} from '../../../../zustand';
import {
    StreamRequest,
    User,
    UserStreamResponse,
} from '@/proto-gen/proto/chat_pb';

interface RightSidebarProps {
    onClose: () => void;
}

const Members: React.FC<RightSidebarProps> = ({ onClose }) => {
    const [user, setUser] = useState<User.AsObject | null>(null);
    const [userList, setUserList] = useState<Array<User.AsObject>>([]);

    useEffect(() => {
        setUser(useUserStore.getState().user);
    }, []);

    useEffect(() => {
        const client = useClientStore.getState().client;
        if (!user || !client) return;
        const req = new StreamRequest();
        req.setId(user.id);

        const userStream = client.userStream(req, {});
        useUserStreamStore.setState({ stream: userStream });
        userStream.on('data', (chunk) => {
            const users = (chunk as UserStreamResponse).toObject().usersList;
            setUserList(users);
        });

        return () => {
            userStream.cancel();
        };
    }, [user, useClientStore]);

    return createPortal(
        <div className="h-[100vh] w-[25vw] flex flex-col bg-background border-[1px] border-secondary">
            <div className="px-[13px] py-[8px] flex items-center w-full">
                <button className="button" onClick={onClose}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className="flex-1">
                    <div className="w-full h-full flex justify-between items-center">
                        <h3 className="pl-[22px] text-lg font-semibold text-white">
                            Members
                        </h3>
                    </div>
                </div>
            </div>
            <div className="w-full flex-1 overflow-hidden flex flex-col text-white">
                <div className="w-full py-4 px-6 flex flex-col items-center">
                    <div className="w-[120px] h-[120px]">
                        <Image
                            className="w-full h-full rounded-full"
                            src="/test-image.png"
                            alt="User image"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="mt-4">
                        <h3 className="font-bold text-lg">Room Chat 0</h3>
                    </div>
                </div>
                <div className="flex-1 overflow-hidden">
                    <SidebarContactList userList={userList} />
                </div>
            </div>
        </div>,
        document.getElementById('right-sidebar')!,
    );
};

export default Members;
