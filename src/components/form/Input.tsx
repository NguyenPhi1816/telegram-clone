import React from 'react';

interface InputProps {
    className?: string;
    label: string;
    onChange: (e: any) => void;
    value: string;
    type?: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({
    className,
    label,
    value,
    onChange,
    type = 'text',
    placeholder = '',
}) => {
    return (
        <div className={`w-full relative ${className}`}>
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={(e) => onChange(e)}
                className="peer w-full h-[54px] py-[11px] px-[13px] bg-background outline-none border-[1px] border-secondary rounded-xl focus:border-primary focus:caret-primary"
            />
            <label className="p-[4px] absolute -top-3 left-2 text-xs text-secondary bg-background peer-focus:text-primary">
                {label}
            </label>
        </div>
    );
};

export default Input;
