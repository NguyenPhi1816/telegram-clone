interface SubmitProps {
    value: string;
    className?: string;
    onClick: () => void;
}

const Submit: React.FC<SubmitProps> = ({ value, className, onClick }) => {
    const handleClick = (e: any) => {
        e.preventDefault();
        onClick();
    };
    return (
        <input
            className={`w-full bg-primary h-[54px] py-[11px] px-[13px] rounded-xl ${className}`}
            type="submit"
            value={value}
            onClick={(e) => handleClick(e)}
        />
    );
};

export default Submit;
