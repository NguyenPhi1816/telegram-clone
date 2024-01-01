import { FC } from 'react';
import { createPortal } from 'react-dom';

interface MessageDialogProps {
    title: string;
    message: string;
    onClose: () => void;
}

const MessageDialog: FC<MessageDialogProps> = ({ title, message, onClose }) => {
    const dialog = (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#0F0F0F]/[.3] z-10">
            <div className="p-5 rounded-2xl bg-background text-white">
                <div className="mb-2 text-2xl text-center">
                    <h2>{title}</h2>
                </div>
                <div className="mb-2">
                    <p>{message}</p>
                </div>
                <div className="w-full flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-2 py-1 bg-primary rounded-md"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
    return createPortal(dialog, document.getElementById('root')!);
};

export default MessageDialog;
