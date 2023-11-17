import SidebarContactItem from './SidebarContactItem';

const SidebarContactList = () => {
    return (
        <div className="w-full h-full p-2 overflow-y-scroll">
            <ul>
                {Array.from({ length: 20 }, (_, index) => ({ id: index })).map(
                    (item) => (
                        <li key={item.id}>
                            <SidebarContactItem data={item} />
                        </li>
                    ),
                )}
            </ul>
        </div>
    );
};

export default SidebarContactList;
