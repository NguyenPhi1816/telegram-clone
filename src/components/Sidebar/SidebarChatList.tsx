import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarChatList = () => {
    const pathName = usePathname();

    return (
        <div className="w-full h-full p-2 overflow-y-scroll">
            <ul>
                {Array.from({ length: 20 }, (_, index) => ({ id: index })).map(
                    (item) => (
                        <li key={item.id}>
                            <Link href={`${item.id}`} className="block">
                                <div
                                    className={`${
                                        pathName.replace('/', '').toString() ===
                                            item.id.toString() &&
                                        'sidebar-chat-item-active'
                                    }  p-[9px] flex w-full items-center place-content-between rounded-lg hover:bg-hover`}
                                >
                                    <img
                                        className="mr-2 w-[54px] h-[54px] rounded-full"
                                        src="/test-image.jpg"
                                        alt="User Image"
                                    />
                                    <span className="w-chat-item-info-width flex flex-col place-content-evenly">
                                        <span className="flex items-center place-content-between">
                                            <h3 className="text-white font-semibold">
                                                Username
                                            </h3>
                                            <p
                                                className={`${
                                                    pathName
                                                        .replace('/', '')
                                                        .toString() ===
                                                        item.id.toString() &&
                                                    'sidebar-chat-item-active-text'
                                                } text-secondary text-xs`}
                                            >
                                                10:23
                                            </p>
                                        </span>
                                        <p
                                            className={`${
                                                pathName
                                                    .replace('/', '')
                                                    .toString() ===
                                                    item.id.toString() &&
                                                'sidebar-chat-item-active-text'
                                            } w-full text-secondary text-sm truncate`}
                                        >
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit. Enim
                                            voluptates ratione, temporibus quis
                                            odit velit ipsam reiciendis mollitia
                                            maiores dolor beatae tenetur commodi
                                            in eos sapiente similique quam
                                            quisquam earum.
                                        </p>
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ),
                )}
            </ul>
        </div>
    );
};

export default SidebarChatList;
