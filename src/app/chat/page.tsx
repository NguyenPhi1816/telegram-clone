'use client';
import { useEffect } from 'react';
import { useUserStore } from '../../../zustand';
import { useRouter } from 'next/navigation';

export default function Chat() {
    const router = useRouter();

    useEffect(() => {
        const user = useUserStore.getState().user;
        if (!user) return router.push('/login');
    }, []);

    return (
        <div className="max-w-[75vw] background">
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="font-bold text-lg">
                    Please choose a room to join the Chat! Have fun.
                </h1>
            </div>
        </div>
    );
}
