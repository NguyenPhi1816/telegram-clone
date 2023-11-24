import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ConfirmationDialogProps {
    title: ReactNode;
    message: ReactNode;
    options: ReactNode;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
    title,
    message,
    options,
}) => {
    const dialog = (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#0F0F0F]/[.3]">
            <div className="p-5 rounded-2xl bg-background text-white">
                {title}
                {message}
                {options}
            </div>
        </div>
    );
    return createPortal(dialog, document.getElementById('root')!);
};

export default ConfirmationDialog;
