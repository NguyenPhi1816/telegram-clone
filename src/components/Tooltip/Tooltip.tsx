import Tippy from '@tippyjs/react/headless';
import React, { ReactNode, useEffect, useState } from 'react';

interface TooltipProps {
    children: any;
    TippyBox: ReactNode;
    isShow: boolean;
    onClickOutside?: () => void;
    className?: string;
}

const Tooltip = ({
    children,
    TippyBox,
    isShow,
    className,
    onClickOutside = () => {},
}: TooltipProps): ReactNode => {
    const [body, setBody] = useState<HTMLElement>();

    useEffect(() => {
        setBody(document.body!);
    }, []);

    return (
        body && (
            <Tippy
                render={(attrs) => (
                    <div className="box" tabIndex={-1} {...attrs}>
                        <div
                            className={`p-1 min-w-[17rem] bg-tooltipMenu shadow-default backdrop-blur-sm rounded-xl ${className} `}
                        >
                            {TippyBox}
                        </div>
                    </div>
                )}
                interactive
                visible={isShow}
                onClickOutside={onClickOutside}
                appendTo={body}
            >
                {children}
            </Tippy>
        )
    );
};

export default Tooltip;
