import React, { ReactNode } from 'react';

interface SidebarSettingItemProps {
    content: ReactNode;
    icon: ReactNode;
    onClick?: () => void;
    className?: string;
}

const SidebarSettingItem: React.FC<SidebarSettingItemProps> = ({
    content,
    icon,
    onClick = () => {},
    className,
}) => {
    return (
        <button
            className={`flex justify-start w-full p-4 rounded-xl ${className} hover:bg-hover`}
            onClick={onClick}
        >
            <div className="w-6 h-6 mr-5 text-secondary text-xl">{icon}</div>
            <div className="flex-1">
                <div className="text-white font-medium text-base w-full flex justify-start">
                    {content}
                </div>
            </div>
        </button>
    );
};

export default SidebarSettingItem;
