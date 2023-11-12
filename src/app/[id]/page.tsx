'use client';

const ChatPage = async ({ params }: { params: { id: string } }) => {
    return (
        <div className="background">
            <div>{params.id}</div>
        </div>
    );
};

export default ChatPage;
