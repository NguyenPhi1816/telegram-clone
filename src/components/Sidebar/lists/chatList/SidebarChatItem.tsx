import { Room } from '@/proto-gen/proto/chat_pb';
import Image from 'next/image';
import Link from 'next/link';

interface SidebarChatItemProps {
    data: Room.AsObject;
    isSelected: boolean;
}

const SidebarChatItem: React.FC<SidebarChatItemProps> = ({
    data,
    isSelected,
}) => {
    return (
        <Link href={`/chat/${data.id}`} className="block">
            <div
                className={`${
                    isSelected && 'sidebar-chat-item-active'
                }  p-[9px] flex w-full items-center place-content-between rounded-lg hover:bg-hover`}
            >
                <Image
                    className="mr-2 w-[54px] h-[54px] rounded-full"
                    src={data.imageurl}
                    alt="Room image"
                    width={100}
                    height={100}
                />
                <span className="w-chat-item-info-width flex flex-col place-content-evenly">
                    <span className="flex items-center place-content-between">
                        <h3 className="text-white font-semibold">
                            {data.name}
                        </h3>
                    </span>
                    <span className="flex">
                        <p
                            className={`${
                                isSelected && 'sidebar-chat-item-active-text'
                            } flex-1 text-secondary text-sm truncate`}
                        >
                            {data.description}
                        </p>
                    </span>
                </span>
            </div>
        </Link>
    );
};

export default SidebarChatItem;
