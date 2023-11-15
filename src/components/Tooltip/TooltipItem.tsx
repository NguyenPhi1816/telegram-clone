import React, { ReactNode } from 'react';

interface TooltipItemProps {
    content: ReactNode;
    icon: ReactNode;
}

const TooltipItem: React.FC<TooltipItemProps> = ({ content, icon }) => {
    return (
        <div className="flex w-full px-2 py-1 cursor-pointer rounded-md hover:bg-black">
            <div className="mr-5 ml-2 text-secondary">{icon}</div>
            <div className="flex-1">
                <div className="text-white font-medium text-[14px]">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default TooltipItem;
