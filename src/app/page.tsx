'use client';
import { redirect } from 'next/navigation';
import { useClientStore, useUserStore } from '../../zustand';
import { useEffect } from 'react';

export default function Home() {
    const getClient = async () => {
        const { ChatClient } = await import(
            '../proto-gen/proto/ChatServiceClientPb'
        );
        const client = new ChatClient('http://localhost:8080');
        useClientStore.setState({ client: client });
    };

    useEffect(() => {
        getClient();
        const user = useUserStore.getState().user;
        if (!user) {
            redirect('/login');
        } else {
            redirect('/chat');
        }
    }, []);
}
