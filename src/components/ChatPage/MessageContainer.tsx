import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChatAppendix from '../Icon/ChatAppendix';
import { faCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons';

export enum MessageContainerType {
    CURRENT_USER,
    OTHER_USER,
}

interface MessageContainerProps {
    message: string;
    type: MessageContainerType;
    isSeen: boolean;
}

const MessageContainer: React.FC<MessageContainerProps> = ({
    message,
    type,
    isSeen,
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
                className={`mb-[6px] max-w-[30rem] flex items-end ${
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
                    <p>{message}</p>
                    {type === MessageContainerType.CURRENT_USER && (
                        <div className="flex justify-end text-xs">
                            <div className="text-messageMetaOwn mr-1">7:55</div>
                            <div>
                                {!isSeen && <FontAwesomeIcon icon={faCheck} />}
                                {isSeen && (
                                    <FontAwesomeIcon icon={faCheckDouble} />
                                )}
                            </div>
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
