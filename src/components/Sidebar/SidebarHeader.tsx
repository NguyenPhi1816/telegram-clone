'use client';
import Avatar from '../Avatar';
import {
    useStreamMessageStore,
    useUserStore,
    useUserStreamStore,
} from '../../../zustand';
import { useEffect, useState } from 'react';
import { User } from '@/proto-gen/proto/chat_pb';
import Tooltip from '../Tooltip/Tooltip';
import TooltipItem from '../Tooltip/TooltipItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const SidebarHeader = () => {
    const router = useRouter();
    const [user, setUser] = useState<User.AsObject | null>(null);
    const [isShowTooltipMenu, setIsShowTooltipMenu] = useState<boolean>(false);

    const handleToggleTooltipMenu = (): void => {
        setIsShowTooltipMenu((prev) => !prev);
    };

    const handleLogOut = () => {
        useUserStore.setState({ user: null });
        useUserStreamStore.getState().endStream();
        useStreamMessageStore.getState().endStream();
        router.push('/login');
    };

    useEffect(() => {
        setUser(useUserStore.getState().user);
    }, []);

    return (
        <div className="p-[9px] w-full flex items-center">
            <Tooltip
                isShow={isShowTooltipMenu}
                TippyBox={
                    <>
                        <TooltipItem
                            icon={<FontAwesomeIcon icon={faRightFromBracket} />}
                            content="Log out"
                            onClick={handleLogOut}
                        />
                    </>
                }
                onClickOutside={handleToggleTooltipMenu}
                className="ml-[10px] mt-[70px] min-w-[10rem]"
            >
                <Avatar
                    onClick={handleToggleTooltipMenu}
                    className="mb-0 mt-0 w-[40px]"
                    url={user?.avatar}
                />
            </Tooltip>

            <div className="ml-5">
                <p>Welcome back</p>
                <h3 className="font-bold text-lg text-primary">{user?.name}</h3>
            </div>
        </div>
    );
};

export default SidebarHeader;
