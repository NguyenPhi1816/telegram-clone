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
        <Link href={`/${data.id}`} className="block">
            <div
                className={`${
                    isSelected && 'sidebar-chat-item-active'
                }  p-[9px] flex w-full items-center place-content-between rounded-lg hover:bg-hover`}
            >
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
                        <p
                            className={`${
                                isSelected && 'sidebar-chat-item-active-text'
                            } text-secondary text-xs`}
                        >
                            10:23
                        </p>
                    </span>
                    <span className="flex">
                        <p
                            className={`${
                                isSelected && 'sidebar-chat-item-active-text'
                            } flex-1 text-secondary text-sm truncate`}
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Enim voluptates ratione, temporibus quis odit
                            velit ipsam reiciendis mollitia maiores dolor beatae
                            tenetur commodi in eos sapiente similique quam
                            quisquam earum.
                        </p>
                        {isUnread && (
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                <p className="text-white text-center text-sm">
                                    1
                                </p>
                            </div>
                        )}
                    </span>
                </span>
            </div>
        </Link>
    );
};

export default SidebarChatItem;
