import Avatar from '@/components/Avatar';
import { Status, User } from '@/proto-gen/proto/chat_pb';
import React from 'react';

interface SidebarContactItemProps {
    data: User.AsObject;
}

const SidebarContactItem: React.FC<SidebarContactItemProps> = ({ data }) => {
    return (
        <div className="my-2 p-[9px] flex w-full items-center place-content-between rounded-lg hover:bg-hover">
            <Avatar url={data.avatar} className="mr-5  w-[54px] h-[54px]" />
            <span className="w-chat-item-info-width flex flex-col place-content-evenly">
                <span className="flex items-center place-content-between">
                    <h3 className="text-white font-semibold">{data.name}</h3>
                </span>
                <span className="flex text-sm">
                    {data.status === Status.OFFLINE && (
                        <div className="flex items-center">
                            <div className="mr-2 w-3 h-3 bg-red-400 rounded-full"></div>
                            <p className="text-red-400">offline</p>
                        </div>
                    )}
                    {data.status === Status.ONLINE && (
                        <div className="flex items-center">
                            <div className="mr-2 w-3 h-3 bg-green-400 rounded-full"></div>
                            <p className="text-green-400">online</p>
                        </div>
                    )}
                    {data.status === Status.UNKOWN && (
                        <div className="flex items-center">
                            <div className="mr-2 w-3 h-3 bg-secondary rounded-full"></div>
                            <p className="text-secondary">unknown</p>
                        </div>
                    )}
                </span>
            </span>
        </div>
    );
};

export default SidebarContactItem;
