'use client';
import Avatar from '../Avatar';
import {
    useClientStore,
    useRoomStreamStore,
    useStreamMessageStore,
    useUserStore,
    useUserStreamStore,
} from '../../../zustand';
import { useEffect, useState } from 'react';
import { LogOutRequest, User } from '@/proto-gen/proto/chat_pb';
import Tooltip from '../Tooltip/Tooltip';
import TooltipItem from '../Tooltip/TooltipItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import UserList from './overlays/UserList';
import MessageDialog from '../dialogs/MessageDialog';

const SidebarHeader = () => {
    const router = useRouter();
    const [user, setUser] = useState<User.AsObject | null>(null);
    const [isShowTooltipMenu, setIsShowTooltipMenu] = useState<boolean>(false);
    const [isShowUserList, setIsShowUserList] = useState<boolean>(false);
    const [err, setErr] = useState<string>('');

    const handleToggleTooltipMenu = (): void => {
        setIsShowTooltipMenu((prev) => !prev);
    };

    const handleToggleUserList = (): void => {
        setIsShowUserList((prev) => !prev);
    };

    const handleLogOut = () => {
        const client = useClientStore.getState().client;
        if (!client || !user) return;

        const req = new LogOutRequest();
        req.setUserId(user.id);
        client.logOut(req, {}, (err) => {
            if (err) return setErr(err.message);
            useUserStore.setState({ user: null });
            useUserStreamStore.getState().endStream();
            useStreamMessageStore.getState().endStream();
            useRoomStreamStore.getState().endStream();
            router.push('/login');
        });
    };

    const handleCloseDialog = () => {
        setErr('');
    };

    useEffect(() => {
        setUser(useUserStore.getState().user);
    }, []);

    return (
        <>
            <div className="p-[9px] w-full flex items-center">
                <Tooltip
                    isShow={isShowTooltipMenu}
                    TippyBox={
                        <>
                            <TooltipItem
                                icon={
                                    <FontAwesomeIcon
                                        icon={faRightFromBracket}
                                    />
                                }
                                content="Log out"
                                onClick={handleLogOut}
                            />
                            <TooltipItem
                                icon={<FontAwesomeIcon icon={faUsers} />}
                                content="Show all users"
                                onClick={handleToggleUserList}
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
                    <h3 className="font-bold text-lg text-primary">
                        {user?.name}
                    </h3>
                </div>
            </div>
            {isShowUserList && <UserList onClose={handleToggleUserList} />}
            {err && (
                <MessageDialog
                    title="Something went wrong"
                    message={err}
                    onClose={handleCloseDialog}
                />
            )}
        </>
    );
};

export default SidebarHeader;
