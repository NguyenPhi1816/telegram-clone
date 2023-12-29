'use client';
import { useRouter } from 'next/navigation';
import { InitiateRequest, Status } from '@/proto-gen/proto/chat_pb';
import { useClientStore, useUserStore } from '../../../zustand';
import Avatar from '../../components/Avatar';
import Input from '../../components/form/Input';
import Submit from '../../components/form/Submit';
import React, { useEffect, useState } from 'react';

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const getClient = async () => {
        const { ChatClient } = await import(
            '../../proto-gen/proto/ChatServiceClientPb'
        );
        const client = new ChatClient('http://192.168.1.17');
        useClientStore.setState({ client: client });
    };

    useEffect(() => {
        getClient();
    }, []);

    const handleUserSubmit = () => {
        const client = useClientStore.getState().client;
        if (!client || !username || !password) return;
        const req = new InitiateRequest();
        req.setUsername(username);
        req.setPassword(password);
        client.chatInitiate(req, {}, (err, resp) => {
            if (err) return console.error(err);
            const _user = resp?.toObject().user;
            useUserStore.setState({ user: _user });
            router.push('/chat');
        });
    };

    return (
        <div className="background">
            <div className="w-full h-full flex justify-center items-center relative z-[1]">
                <div className="w-[35%] bg-background p-6 rounded-xl flex flex-col items-center">
                    <Avatar
                        url="https://robohash.org/123.png"
                        className="mb-10 bg-primary"
                    />
                    <form className="w-full [&>*]:mt-5">
                        <Input
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                        />
                        <Input
                            type="password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Submit value="Submit" onClick={handleUserSubmit} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
