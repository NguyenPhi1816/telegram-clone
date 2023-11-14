import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChatAppendix from '../Icon/ChatAppendix';

const ChatInput = () => {
    return (
        <div className="mb-5 px-4 flex w-full">
            <div className="flex-1 flex items-end">
                <input
                    className="p-5 w-full h-14 bg-background rounded-xl rounded-br-none"
                    placeholder="Message"
                />
                <div className="relative top-[3px]">
                    <ChatAppendix color="#212121" />
                </div>
            </div>
            <div>
                <button className="w-14 h-14 bg-background rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    );
};

export default ChatInput;
