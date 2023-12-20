import Sidebar from '@/components/Sidebar/Sidebar';

export default function ProductDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative w-[100vw] h-[100vh] flex">
            <Sidebar />
            {children}
            <div
                id="right-sidebar"
                className="absolute right-0 top-0 border-r-[1px] border-r-secondary"
            ></div>
        </div>
    );
}
