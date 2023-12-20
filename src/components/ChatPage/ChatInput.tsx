'use client';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChatAppendix from '../Icon/ChatAppendix';
import { useEffect, useState } from 'react';
import { MessageRequest, User } from '@/proto-gen/proto/chat_pb';
import { ChatClient } from '@/proto-gen/proto/ChatServiceClientPb';
import { useClientStore, useUserStore } from '../../../zustand';

const ChatInput = () => {
    const [user, setUser] = useState<User.AsObject | null>(null);
    const [client, setClient] = useState<ChatClient | null>(null);
    const [msg, setMsg] = useState<string>('');

    useEffect(() => {
        setUser(useUserStore.getState().user);
        setClient(useClientStore.getState().client);
    }, []);

    const handleSubmit = () => {
        if (!user || !client || msg.trim() === '') return;
        else {
            const msgReq = new MessageRequest();
            msgReq.setId(user.id);
            msgReq.setMessage(msg);
            client.sendMessage(msgReq, {}, (err, resp) => {
                if (err) return console.error(err);
                return console.log(resp);
            });
            setMsg('');
        }
    };

    return (
        <div className="mb-5 px-4 pt-2 flex w-full border-t border-secondary">
            <div className="flex-1 flex items-end">
                <input
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="p-5 w-full h-14 bg-background rounded-xl rounded-br-none focus:outline-none"
                    placeholder="Message"
                />
                <div className="relative top-[3px]">
                    <ChatAppendix color="#212121" />
                </div>
            </div>
            <div>
                <button onClick={handleSubmit} className="lg-button">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    );
};

export default ChatInput;
