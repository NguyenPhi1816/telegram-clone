'use client';
import { useRouter } from 'next/navigation';
import { InitiateRequest, Status } from '@/proto-gen/proto/chat_pb';
import { useClientStore, useUserStore } from '../../../zustand';
import Avatar from '../../components/Avatar';
import Input from '../../components/form/Input';
import Submit from '../../components/form/Submit';
import React, { useState } from 'react';

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState<string>('Enter your name');
    const [avatar, setAvatar] = useState<string>('https://robohash.org/1.png');

    const handleUserSubmit = () => {
        const client = useClientStore.getState().client!;
        if (!username || !avatar) return;
        const req = new InitiateRequest();
        req.setName(username);
        req.setAvatarUrl(avatar);
        client.chatInitiate(req, {}, (err, resp) => {
            if (err) return console.error(err);
            const respObj = resp?.toObject();
            const _user = {
                id: respObj.id,
                avatar,
                name: username,
                status: Status.ONLINE,
            };
            useUserStore.setState({ user: _user });
            router.push('/chat');
        });
    };

    return (
        <div className="background">
            <div className="w-full h-full flex justify-center items-center relative z-[1]">
                <div className="w-[35%] bg-background p-6 rounded-xl flex flex-col items-center">
                    <Avatar
                        onChange={(url) => {
                            setAvatar(url);
                        }}
                    />
                    <form className="w-full">
                        <Input
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Submit
                            className="mt-5"
                            value="Submit"
                            onClick={handleUserSubmit}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
