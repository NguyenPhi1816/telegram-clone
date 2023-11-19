import React from 'react';

interface RightSidebarProps {
    children?: any;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ children }) => {
    return (
        <div
            id="right-sidebar"
            className="border-r-[1px] border-r-secondary relative"
        >
            {children}
        </div>
    );
};

export default RightSidebar;
