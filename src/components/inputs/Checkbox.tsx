import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface CheckboxProps {
    className: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ className }) => {
    return (
        <label className={`${className} relative`}>
            <input
                className={`peer w-0 h-0 after:content-[""] after:absolute after:top-0 after:left-0 after:block after:w-4 after:h-4 after:bg-background after:border-2 after:border-secondary after:rounded checked:after:bg-primary checked:after:border-primary checked:after:content-['\xb9']`}
                type="checkbox"
            />
            <span className="absolute top-0 left-0 translate-x-[2px] -translate-y-[2px] text-sm invisible peer-checked:visible">
                <FontAwesomeIcon icon={faCheck} />
            </span>
        </label>
    );
};

export default Checkbox;
