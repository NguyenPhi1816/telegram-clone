import {
    faCopy,
    faDownload,
    faShare,
    faTimes,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface ChatSelectToolbarProps {
    selectedMessage: number[];
    onClearSelectedMessage: () => void;
    onClose: () => void;
}

const ChatSelectToolbar: React.FC<ChatSelectToolbarProps> = ({
    selectedMessage,
    onClearSelectedMessage,
    onClose,
}) => {
    const handleCloseSelectToolbar = (): void => {
        onClearSelectedMessage();
        onClose();
    };

    return (
        <div className="mb-5 p-1 w-full bg-background rounded-2xl flex justify-between items-center">
            <div>
                <button
                    className="button w-[46px] h-[46px]  text-xl"
                    onClick={handleCloseSelectToolbar}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="flex-1 ml-4 font-semibold">
                <p>
                    {`${selectedMessage.length} ${
                        selectedMessage.length > 1
                            ? `messages selected`
                            : `message selected`
                    }`}
                </p>
            </div>
            <div>
                <button className="button w-[46px] h-[46px] text-xl">
                    <FontAwesomeIcon icon={faShare} />
                </button>
                <button className="button w-[46px] h-[46px] text-xl">
                    <FontAwesomeIcon icon={faDownload} />
                </button>
                <button className="button w-[46px] h-[46px] text-xl">
                    <FontAwesomeIcon icon={faCopy} />
                </button>
                <button className="button w-[46px] h-[46px] text-red-600 text-xl">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default ChatSelectToolbar;
