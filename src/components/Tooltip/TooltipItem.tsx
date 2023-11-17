import React, { ReactNode } from 'react';

interface TooltipItemProps {
    content: ReactNode;
    icon: ReactNode;
    onClick?: () => void;
}

const TooltipItem: React.FC<TooltipItemProps> = ({
    content,
    icon,
    onClick = () => {},
}) => {
    return (
        <button
            className="flex justify-start w-full px-2 py-1 rounded-md hover:bg-black"
            onClick={onClick}
        >
            <div className="w-6 h-6 mr-5 ml-2 text-secondary">{icon}</div>
            <div className="flex-1">
                <div className="text-white font-medium text-[14px] w-full flex justify-between">
                    {content}
                </div>
            </div>
        </button>
    );
};

export default TooltipItem;
