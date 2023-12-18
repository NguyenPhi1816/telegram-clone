import Sidebar from '@/components/Sidebar/Sidebar';

export default function ProductDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Sidebar />
            {children}
            <div
                id="right-sidebar"
                className="border-r-[1px] border-r-secondary relative"
            ></div>
        </>
    );
}
