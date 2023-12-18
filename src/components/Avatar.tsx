'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface AvatarProps {
    className?: string;
    url?: string | undefined;
    onChange?: (url: string) => void;
}

const Avatar: React.FC<AvatarProps> = ({ className, url, onChange }) => {
    const [randomIdx, setRandomIdx] = useState<number>(1);

    const handleClick = () => {
        const idx = Math.floor(Math.random() * 100);
        setRandomIdx(idx);
        onChange?.(`https://robohash.org/${idx}.png`);
    };

    return (
        <div>
            <div
                onClick={handleClick}
                className={`mb-10 mt-5 w-[125px] rounded-full ring ring-primary ring-offset-background ring-offset-2 overflow-hidden ${className}`}
            >
                {url ? (
                    <Image
                        priority
                        src={url}
                        width={256}
                        height={256}
                        alt={'User avatar'}
                    />
                ) : (
                    <Image
                        priority
                        src={`https://robohash.org/${randomIdx}.png`}
                        width={256}
                        height={256}
                        alt={'User avatar'}
                    />
                )}
            </div>
        </div>
    );
};

export default Avatar;
