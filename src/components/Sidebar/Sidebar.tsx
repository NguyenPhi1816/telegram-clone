import SidebarChatList from './lists/chatList/SidebarChatList';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {
    return (
        <nav className="h-[100vh] w-[25vw] border-r-[1px] border-r-secondary relative">
            <div className="flex flex-col h-full bg-background">
                <div className="flex pt-[6px] pb-2 px-[13px] text-secondary">
                    <SidebarHeader />
                </div>
                <div className="flex-1 overflow-hidden">
                    <SidebarChatList />
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
