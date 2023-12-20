import Image from 'next/image';
import Link from 'next/link';

interface ChatItemDataType {
    id: number;
}

interface SidebarChatItemProps {
    data: ChatItemDataType;
    isSelected: boolean;
    isUnread: boolean;
}

const SidebarChatItem: React.FC<SidebarChatItemProps> = ({
    data,
    isSelected,
    isUnread,
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
                    src="/test-image.png"
                    alt="User image"
                    width={100}
                    height={100}
                />
                <span className="w-chat-item-info-width flex flex-col place-content-evenly">
                    <span className="flex items-center place-content-between">
                        <h3 className="text-white font-semibold">
                            Room Chat 0
                        </h3>
                    </span>
                    <span className="flex">
                        <p
                            className={`${
                                isSelected && 'sidebar-chat-item-active-text'
                            } flex-1 text-secondary text-sm truncate`}
                        >
                            This room is about playing game.
                        </p>
                    </span>
                </span>
            </div>
        </Link>
    );
};

export default SidebarChatItem;
