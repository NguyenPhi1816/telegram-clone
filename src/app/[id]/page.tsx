'use client';

import {
    faEllipsisVertical,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatPage = async ({ params }: { params: { id: string } }) => {
    return (
        <div className="background">
            <div className="w-full h-full relative flex flex-col">
                <div className="flex py-1 pl-[23px] pr-[13px] bg-background">
                    <div className="flex-1 flex items-center justify-start">
                        <button className="w-10 h-10 mr-[10px]">
                            <img
                                className="w-full h-full object-cover rounded-full"
                                src="./test-image.jpg"
                            />
                        </button>
                        <span>
                            <h3 className="font-bold text-lg">Username</h3>
                            <p className="text-sm text-secondary">
                                last seen recently
                            </p>
                        </span>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="button">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <button className="button">
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </div>
                </div>
                <div className="flex-1"></div>
                <div>
                    <div className="mx-auto mb-5 px-4 flex w-[610px]">
                        <div className="flex-1 flex items-end">
                            <input
                                className="p-5 w-full h-14 bg-background rounded-xl rounded-br-none"
                                placeholder="Message"
                            />
                            <div className="relative top-[3px]">
                                <svg
                                    width="9"
                                    height="20"
                                    className="svg-appendix"
                                >
                                    <defs>
                                        <filter
                                            x="-50%"
                                            y="-14.7%"
                                            width="200%"
                                            height="141.2%"
                                            filterUnits="objectBoundingBox"
                                            id="messageAppendix"
                                        >
                                            <feOffset
                                                dy="1"
                                                in="SourceAlpha"
                                                result="shadowOffsetOuter1"
                                            ></feOffset>
                                            <feGaussianBlur
                                                stdDeviation="1"
                                                in="shadowOffsetOuter1"
                                                result="shadowBlurOuter1"
                                            ></feGaussianBlur>
                                            <feColorMatrix
                                                values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0"
                                                in="shadowBlurOuter1"
                                            ></feColorMatrix>
                                        </filter>
                                    </defs>
                                    <g fill="none" fill-rule="evenodd">
                                        <path
                                            d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
                                            fill="#000"
                                            filter="url(#messageAppendix)"
                                        ></path>
                                        <path
                                            d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
                                            fill="#212121"
                                            className="corner"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <button className="w-14 h-14 bg-background rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
