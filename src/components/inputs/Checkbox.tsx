import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export enum CheckboxSize {
    sm,
    lg,
}

interface CheckboxProps {
    className?: string;
    size?: CheckboxSize;
    rounded?: boolean;
    onClick?: () => void;
    checked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
    className = '',
    size = CheckboxSize.sm,
    rounded = false,
    onClick = () => {},
    checked = false,
}) => {
    const pseudo_w =
        size === CheckboxSize.sm ? 'after:w-[16px]' : 'after:w-[24px]';
    const pseudo_h =
        size === CheckboxSize.sm ? 'after:h-[16px]' : 'after:h-[24px]';
    const pseudo_r = !rounded ? 'after:rounded' : 'after:rounded-full';

    const customInputClass: string = `${pseudo_w} ${pseudo_h} ${pseudo_r}`;

    const check_w = size === CheckboxSize.sm ? 'w-[16px]' : 'w-[24px]';
    const check_h = size === CheckboxSize.sm ? 'h-[16px]' : 'h-[24px]';
    const customCheckClass = `${check_w} ${check_h}`;

    return (
        <label className={`${className} relative`}>
            <input
                className={`peer w-0 h-0 after:content-[""] after:absolute after:top-0 after:left-0 after:block after:bg-background after:border-2 after:border-secondary checked:after:bg-primary checked:after:border-primary checked:after:content-['\xb9'] ${customInputClass}`}
                type="checkbox"
                onClick={onClick}
                checked={checked}
            />
            <span
                className={`absolute top-0 left-0 invisible flex justify-center items-center peer-checked:visible ${customCheckClass}`}
            >
                <FontAwesomeIcon icon={faCheck} />
            </span>
        </label>
    );
};

export default Checkbox;
