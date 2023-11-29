export default function ProductDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <div
                id="right-sidebar"
                className="border-r-[1px] border-r-secondary relative"
            ></div>
        </>
    );
}
