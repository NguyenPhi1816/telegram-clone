import Avatar from '@/components/Avatar';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="background flex justify-center items-center">
            <div className="flex flex-col justify-center items-center z-10">
                <Avatar
                    url="https://robohash.org/123.png"
                    className="mb-10 bg-primary"
                />
                <h1 className="mb-7 font-bold text-3xl">Welcome to Telegram</h1>
                <div className="w-full flex justify-around">
                    <Link
                        href={'/register'}
                        className="input w-1/2 bg-primary flex justify-center items-center"
                    >
                        <span className="font-bold">Register</span>
                    </Link>
                    <span className="w-4"></span>
                    <Link
                        href={'/login'}
                        className="input w-1/2 bg-primary flex justify-center items-center"
                    >
                        <span className="font-bold">Login</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
