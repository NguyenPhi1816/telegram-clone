import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TooltipItem from '../Tooltip/TooltipItem';
import {
    faBan,
    faCircleCheck,
    faGear,
    faMoon,
    faPen,
    faTrash,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

const ChatPageTooltipMenu = () => {
    return (
        <>
            <TooltipItem
                icon={<FontAwesomeIcon icon={faPen} />}
                content="Edit"
            />
            <TooltipItem
                icon={<FontAwesomeIcon icon={faCircleCheck} />}
                content="Select messages"
            />
            <TooltipItem
                icon={<FontAwesomeIcon icon={faBan} />}
                content="Block user"
            />
            <div className="my-1 w-full border-t-[1px] border-t-secondary"></div>
            <TooltipItem
                icon={
                    <FontAwesomeIcon className="text-red-500" icon={faTrash} />
                }
                content={<p className="text-red-500">Delete chat</p>}
            />
        </>
    );
};

export default ChatPageTooltipMenu;
