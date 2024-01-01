import { createPortal } from 'react-dom';
import Avatar from '../Avatar';
import Input from '../form/Input';
import Submit from '../form/Submit';
import React, { useState } from 'react';
import MessageDialog from './MessageDialog';

interface CreateRoomDialogProps {
    onClose: () => void;
    onSubmit: (name: string, description: string, imageUrl: string) => void;
}

const CreateRoomDialog: React.FC<CreateRoomDialogProps> = ({
    onClose,
    onSubmit,
}) => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>(
        'https://robohash.org/1.png',
    );
    const [err, setErr] = useState<string>('');

    const handleSubmit = () => {
        const _name = name.trim();
        const _desc = description.trim();
        if (!_name || !_desc)
            return setErr(new Error('Missing information.').message);
        else return onSubmit(_name, _desc, imageUrl);
    };

    const handleCloseDialog = () => {
        setErr('');
    };

    const dialog = (
        <div>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#0F0F0F]/[.3]">
                <div className="p-5 w-[40%] flex flex-col justify-center items-center rounded-2xl bg-background text-white">
                    <Avatar
                        className="my-5"
                        onChange={(url) => {
                            setImageUrl(url);
                        }}
                    />
                    <form className="w-full [&>*]:mt-5">
                        <Input
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter room name"
                        />
                        <Input
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter description..."
                        />
                        <div className="flex">
                            <Submit value="Cancel" onClick={onClose} />
                            <div className="w-8"></div>
                            <Submit value="Submit" onClick={handleSubmit} />
                        </div>
                    </form>
                </div>
            </div>
            {err && (
                <MessageDialog
                    title="Something went wrong"
                    message={err}
                    onClose={handleCloseDialog}
                />
            )}
        </div>
    );
    return createPortal(dialog, document.getElementById('root')!);
};

export default CreateRoomDialog;
