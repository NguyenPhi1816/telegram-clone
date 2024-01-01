'use client';
import { useRouter } from 'next/navigation';
import { RegisterRequest, Role, Status } from '@/proto-gen/proto/chat_pb';
import { useClientStore, useUserStore } from '../../../zustand';
import Avatar from '../../components/Avatar';
import Input from '../../components/form/Input';
import Submit from '../../components/form/Submit';
import React, { useEffect, useState } from 'react';
import MessageDialog from '@/components/dialogs/MessageDialog';

const Login = () => {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('https://robohash.org/1.png');
    const [err, setErr] = useState<string>('');

    const getClient = async () => {
        const { ChatClient } = await import(
            '../../proto-gen/proto/ChatServiceClientPb'
        );
        const client = new ChatClient('http://localhost:8080');
        useClientStore.setState({ client: client });
    };

    useEffect(() => {
        getClient();
    }, []);

    const handleUserSubmit = () => {
        const client = useClientStore.getState().client;
        if (!client || !username || !avatar || !password || !password2 || !name)
            return setErr('Missing user information.');
        if (password !== password2)
            return setErr('Password confirmation incorrect.');
        const req = new RegisterRequest();
        req.setName(name.trim());
        req.setAvatarUrl(avatar);
        req.setUsername(username.trim());
        req.setPassword(password);
        client.register(req, {}, (err, resp) => {
            if (err) return setErr(err.message);
            const respObj = resp?.toObject();
            const _user = {
                id: respObj.id,
                avatar,
                name: username,
                status: Status.ONLINE,
                role: Role.USER,
            };
            useUserStore.setState({ user: _user });
            router.push('/chat');
        });
    };

    const handleCloseDialog = () => {
        setErr('');
    };

    return (
        <div className="background">
            <div className="w-full h-full flex justify-center items-center relative z-[1]">
                <div className="w-[35%] bg-background p-6 rounded-xl flex flex-col items-center">
                    <Avatar
                        className="mb-10 mt-5"
                        onChange={(url) => {
                            setAvatar(url);
                        }}
                    />
                    <form className="w-full [&>*]:mt-5">
                        <Input
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your Name"
                        />
                        <Input
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your Username"
                        />
                        <Input
                            type="password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Input
                            type="password"
                            label="Re-enter Password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                        <Submit value="Submit" onClick={handleUserSubmit} />
                    </form>
                </div>
            </div>
            {err && (
                <MessageDialog
                    title="Something went wrong"
                    message={err}
                    onClose={handleCloseDialog}
                />
            )}
        </div>
    );
};

export default Login;
