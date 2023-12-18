'use client';
import React, { useEffect, useRef, useState } from 'react';
import MessageContainer, { MessageContainerType } from './MessageContainer';
import ScrollToBottom from './ScrollToBottom';
import Checkbox, { CheckboxSize } from '../form/Checkbox';

interface ConversationPanelProps {
    showSelectMessage: boolean;
    selectedMessage: number[];
    onSelectMessage: (id: number) => void;
}

const ConversationPanel: React.FC<ConversationPanelProps> = ({
    showSelectMessage = false,
    selectedMessage,
    onSelectMessage,
}) => {
    const conversationPanelRef = useRef<HTMLDivElement | null>(null);
    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

    const handleScrollToBottom = () => {
        if (conversationPanelRef.current) {
            const scrollContainer = conversationPanelRef.current;
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const panel = conversationPanelRef.current;
            if (panel) {
                const isAtBottom =
                    panel.scrollTop + panel.scrollHeight === panel.scrollHeight;

                setIsShowBtn(!isAtBottom);
            }
        };

        const panel = conversationPanelRef.current;
        if (panel) {
            panel.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (panel) {
                panel.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div
            ref={conversationPanelRef}
            className="flex flex-col-reverse h-full overflow-y-scroll"
        >
            <ul className="w-full flex flex-col justify-end items-end">
                {Array.from({ length: 20 }, (_, index) => ({ id: index })).map(
                    (item) => (
                        <li
                            key={item.id}
                            className="w-full py-1 mb-[6px]"
                            style={{
                                backgroundColor:
                                    selectedMessage.indexOf(item.id) !== -1
                                        ? '#000000'
                                        : 'transparent',
                            }}
                        >
                            <div className="mx-auto px-4 w-[45.5rem] flex items-end">
                                {showSelectMessage && (
                                    <Checkbox
                                        className="mr-8 "
                                        size={CheckboxSize.lg}
                                        rounded
                                        onClick={() => onSelectMessage(item.id)}
                                        checked={
                                            selectedMessage.indexOf(item.id) !==
                                            -1
                                        }
                                    />
                                )}
                                <MessageContainer
                                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente autem similique, provident expedita quis exercitationem
                    labore, laboriosam quia atque quos ducimus iste dignissimos ex
                    culpa dicta distinctio veritatis aliquam! Ex."
                                    type={
                                        item.id % 2 === 0
                                            ? MessageContainerType.CURRENT_USER
                                            : MessageContainerType.OTHER_USER
                                    }
                                    isSeen={true}
                                />
                            </div>
                        </li>
                    ),
                )}
            </ul>
            <ScrollToBottom isShow={isShowBtn} onClick={handleScrollToBottom} />
        </div>
    );
};

export default ConversationPanel;
