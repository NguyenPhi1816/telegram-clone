import {
    faEllipsisVertical,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatHeader = () => {
    return (
        <div className="flex py-1 pl-[23px] pr-[13px] bg-background">
            <div className="flex-1 flex items-center justify-start">
                <button className="w-10 h-10 mr-[10px]">
                    <img
                        className="w-full h-full object-cover rounded-full"
                        src="./test-image.jpg"
                    />
                </button>
                <span>
                    <h3 className="font-bold text-lg">Username</h3>
                    <p className="text-sm text-secondary">last seen recently</p>
                </span>
            </div>
            <div className="flex justify-center items-center">
                <button className="button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <button className="button">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
            </div>
        </div>
    );
};

export default ChatHeader;
