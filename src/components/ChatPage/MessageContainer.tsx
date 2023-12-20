import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChatAppendix from '../Icon/ChatAppendix';
import { faCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { StreamMessage } from '@/proto-gen/proto/chat_pb';
import Avatar from '../Avatar';

export enum MessageContainerType {
    CURRENT_USER,
    OTHER_USER,
}

interface MessageContainerProps {
    message: StreamMessage.AsObject;
    type: MessageContainerType;
}

const MessageContainer: React.FC<MessageContainerProps> = ({
    message,
    type,
}) => {
    return (
        <div
            className={`w-full flex ${
                type === MessageContainerType.CURRENT_USER
                    ? 'justify-end'
                    : 'justify-start'
            }`}
        >
            <div
                className={`max-w-[30rem] flex items-end ${
                    type === MessageContainerType.CURRENT_USER
                        ? 'flex-row'
                        : 'flex-row-reverse'
                } `}
            >
                <div
                    className={`max-w-[97%] p-2 rounded-lg ${
                        type === MessageContainerType.CURRENT_USER
                            ? 'bg-primary rounded-br-none'
                            : 'bg-background rounded-bl-none'
                    }`}
                >
                    <p>{message.message}</p>
                    {type === MessageContainerType.OTHER_USER && (
                        <div className="mt-1 flex justify-end text-xs">
                            {/* <div className="text-messageMetaOwn mr-1">7:55</div> */}
                            <div>{message.senderName}</div>
                        </div>
                    )}
                </div>
                <div
                    className="relative top-[3px]"
                    style={{
                        transform:
                            type === MessageContainerType.OTHER_USER
                                ? 'scaleX(-1)'
                                : '',
                    }}
                >
                    <Avatar
                        className="absolute bottom-[8px] left-4 w-[40px] h-[40px]"
                        url={message.senderAvatar}
                    />
                    <ChatAppendix
                        color={
                            type === MessageContainerType.CURRENT_USER
                                ? 'var(--background-color-primary)'
                                : 'var(--background-color)'
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default MessageContainer;
