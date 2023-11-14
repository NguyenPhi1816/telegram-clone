import ChatHeader from '@/components/ChatPage/ChatHeader';
import ChatInput from '@/components/ChatPage/ChatInput';
import ConversationPanel from '@/components/ChatPage/ConversationPanel';

const ChatPage = async ({ params }: { params: { conversationId: string } }) => {
    return (
        <div className="background">
            <div className="w-full h-full relative flex flex-col">
                <div className="w-full">
                    <ChatHeader />
                </div>
                <div className="flex-1">
                    <div className="mx-auto w-[45.5rem] h-full">
                        <ConversationPanel />
                    </div>
                </div>
                <div>
                    <div className="mx-auto w-[45.5rem]">
                        <ChatInput />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
