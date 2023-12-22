'use client';
import { usePathname } from 'next/navigation';
import SidebarChatItem from './SidebarChatItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import {
    Role,
    Room,
    RoomRequest,
    RoomStreamRequest,
    RoomStreamResponse,
    User,
} from '@/proto-gen/proto/chat_pb';
import {
    useClientStore,
    useRoomStreamStore,
    useRoomsStore,
    useUserStore,
} from '../../../../../zustand';
import CreateRoomDialog from '@/components/dialogs/CreateRoomDialog';

const SidebarChatList = () => {
    const pathName = usePathname();
    const [user, setUser] = useState<User.AsObject | null>();
    const [rooms, setRooms] = useState<Array<Room.AsObject>>([]);
    const [isShowDialog, setIsShowDialog] = useState<boolean>(false);

    useEffect(() => {
        setUser(useUserStore.getState().user);
    }, []);

    useEffect(() => {
        useRoomStreamStore.getState().endStream();

        const client = useClientStore.getState().client;
        if (!user || !client) return;
        const req = new RoomStreamRequest();
        req.setUserId(user.id);

        const roomStream = client.roomStream(req, {});
        useRoomStreamStore.setState({ stream: roomStream });
        roomStream.on('data', (chunk) => {
            const rooms = (chunk as RoomStreamResponse).toObject().roomsList;
            setRooms(rooms);
            useRoomsStore.setState({ rooms });
        });

        return () => {
            roomStream.cancel();
        };
    }, [user, useClientStore]);

    const handleToggleDialog = () => {
        setIsShowDialog((prev) => !prev);
    };

    const handleCreateRoom = (
        _name: string,
        _desc: string,
        _imageUrl: string,
    ) => {
        const client = useClientStore.getState().client;
        console.log(client, user, _name, _desc, _imageUrl);
        if (!client || !user || !_name || !_desc || !_imageUrl)
            return console.error(new Error('Creating room failed'));
        const req = new RoomRequest();
        req.setName(_name);
        req.setDescription(_desc);
        req.setImageurl(_imageUrl);
        req.setUserId(user.id);
        client.createRoom(req, {}, (err, resp) => {
            if (err) return console.error(err);
            const respObj = resp?.toObject();
            console.log(`Room with id: ${respObj.id} was created`);
            setIsShowDialog(false);
        });
    };

    return (
        <div className="w-full h-full p-2 overflow-y-scroll">
            {user?.role === Role.ADMIN && (
                <div className="w-full flex justify-end">
                    <button
                        onClick={handleToggleDialog}
                        className="flex items-center py-2 px-4 text-white font-bold rounded-full bg-secondary hover:bg-primary transition-all"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        <p className="ml-2">New room</p>
                    </button>
                </div>
            )}
            <ul>
                {rooms.map((room) => (
                    <li key={room.id}>
                        <SidebarChatItem
                            data={room}
                            isSelected={
                                pathName.replace('/', '') === room.id.toString()
                            }
                        />
                    </li>
                ))}
            </ul>
            {isShowDialog && (
                <CreateRoomDialog
                    onClose={handleToggleDialog}
                    onSubmit={handleCreateRoom}
                />
            )}
        </div>
    );
};

export default SidebarChatList;
