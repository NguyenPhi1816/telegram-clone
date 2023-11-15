import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ScrollToBottomProps {
    isShow: boolean;
    onClick?: () => void;
}

const ScrollToBottom: React.FC<ScrollToBottomProps> = ({
    isShow,
    onClick = () => {},
}) => {
    return (
        <div
            className="fixed bottom-0 right-4 opacity-0 transition-all"
            style={isShow ? { bottom: '96px', opacity: '1' } : {}}
        >
            <button className="lg-button" onClick={onClick}>
                <FontAwesomeIcon icon={faArrowDown} />
            </button>
        </div>
    );
};

export default ScrollToBottom;
