import Input from '@/components/inputs/Input';
import {
    faArrowLeft,
    faImage,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SidebarSettingItem from '../SidebarSettingItem';
import Checkbox from '@/components/inputs/Checkbox';
import Image from 'next/image';

interface RightSidebarProps {
    onClose: () => void;
}

const EditChatProfile: React.FC<RightSidebarProps> = ({ onClose }) => {
    return (
        <div className="h-[100vh] w-[25vw] flex flex-col bg-background border-[1px] border-secondary">
            <div className=" px-[13px] py-[8px] flex items-center w-full">
                <button className="button" onClick={onClose}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className="flex-1">
                    <div className="w-full h-full flex justify-between items-center">
                        <h3 className="pl-[22px] text-lg font-semibold text-white">
                            Edit
                        </h3>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full py-4 px-6 flex flex-col items-center">
                    <div className="w-[120px] h-[120px]">
                        <Image
                            className="w-full h-full rounded-full"
                            src="/test-image.jpg"
                            alt="User image"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-bold text-lg">Username</h3>
                    </div>
                    <div className="w-full">
                        <Input label="First name" className="mb-6" />
                        <Input label="Last name" className="mb-6" />
                    </div>
                    <div className="w-full flex">
                        <Checkbox className="mt-1 mr-8 w-4 h-4" />
                        <label>
                            <div>
                                <p>Notifications</p>
                                <p className="text-sm text-secondary">
                                    Enabled
                                </p>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="w-full p-3 border-y-[10px] border-black">
                    <SidebarSettingItem
                        icon={<FontAwesomeIcon icon={faImage} />}
                        content={'Suggest Photo for Username'}
                    />
                    <SidebarSettingItem
                        icon={<FontAwesomeIcon icon={faImage} />}
                        content={'Set Photo for Username'}
                    />
                    <div className="mt-2 mb-4 px-4 text-secondary text-base">
                        <p>
                            You can replace Username&apos;s photo with another
                            photo that only you will see
                        </p>
                    </div>
                </div>
                <div className="w-full py-4 px-3 flex flex-col items-center">
                    <SidebarSettingItem
                        icon={
                            <span className="text-red-600">
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                        }
                        content={<p className="text-red-600">Delete contact</p>}
                    />
                </div>
            </div>
        </div>
    );
};

export default EditChatProfile;
