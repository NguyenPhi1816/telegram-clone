import ChatAppendix from '../Icon/ChatAppendix';

export enum MessageContainerType {
    CURRENT_USER,
    OTHER_USER,
}

interface MessageContainerProps {
    message: string;
    type: MessageContainerType;
}

const MessageContainer: React.FC<MessageContainerProps> = ({
    message,
    type,
}) => {
    return (
        <div
            className="mb-[6px] max-w-[50%] flex items-end"
            style={{
                flexDirection:
                    type === MessageContainerType.CURRENT_USER
                        ? 'row'
                        : 'row-reverse',
            }}
        >
            <div
                className="max-w-[97%] p-2 rounded-lg rounded-br-none"
                style={{
                    backgroundColor:
                        type === MessageContainerType.CURRENT_USER
                            ? 'var(--background-color-primary)'
                            : 'var(--background-color)',
                }}
            >
                {message}
            </div>
            <div className="relative top-[3px]">
                <ChatAppendix
                    color={
                        type === MessageContainerType.CURRENT_USER
                            ? 'var(--background-color-primary)'
                            : 'var(--background-color)'
                    }
                />
            </div>
        </div>
    );
};

export default MessageContainer;
