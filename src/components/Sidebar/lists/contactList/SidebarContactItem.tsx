import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ContactItemDataType {
    id: number;
}

interface SidebarContactItemProps {
    data: ContactItemDataType;
}

const SidebarContactItem: React.FC<SidebarContactItemProps> = ({ data }) => {
    return (
        <Link href={`/${data.id}`} className="block">
            <div className="p-[9px] flex w-full items-center place-content-between rounded-lg hover:bg-hover">
                <Image
                    className="mr-2 w-[54px] h-[54px] rounded-full"
                    src="/test-image.jpg"
                    alt="User image"
                    width={100}
                    height={100}
                />
                <span className="w-chat-item-info-width flex flex-col place-content-evenly">
                    <span className="flex items-center place-content-between">
                        <h3 className="text-white font-semibold">Username</h3>
                    </span>
                    <span className="flex">
                        <p className="flex-1 text-secondary text-sm truncate">
                            Last seen 53 minutes ago
                        </p>
                    </span>
                </span>
            </div>
        </Link>
    );
};

export default SidebarContactItem;
