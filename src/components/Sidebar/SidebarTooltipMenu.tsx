import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TooltipItem from '../Tooltip/TooltipItem';
import { faGear, faMoon, faUser } from '@fortawesome/free-solid-svg-icons';

const SidebarTooltipMenu = () => {
    return (
        <>
            <TooltipItem
                icon={<FontAwesomeIcon icon={faUser} />}
                content="Contacts"
            />
            <TooltipItem
                icon={<FontAwesomeIcon icon={faGear} />}
                content="Setting"
            />
            <TooltipItem
                icon={<FontAwesomeIcon icon={faMoon} />}
                content={
                    <div className="w-full flex justify-between items-center">
                        <p>Night mode</p>
                        <span className="flex items-center justify-end w-[26px] h-[11px] bg-primary rounded-full">
                            <span className="block w-[14px] h-[14px] bg-black rounded-full border-primary border-2"></span>
                        </span>
                    </div>
                }
            />
        </>
    );
};

export default SidebarTooltipMenu;
