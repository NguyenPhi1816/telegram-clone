import MessageContainer, { MessageContainerType } from './MessageContainer';

const ConversationPanel = () => {
    return (
        <div className="px-4 w-full h-full">
            <div>
                <MessageContainer
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente autem similique, provident expedita quis exercitationem
                labore, laboriosam quia atque quos ducimus iste dignissimos ex
                culpa dicta distinctio veritatis aliquam! Ex."
                    type={MessageContainerType.CURRENT_USER}
                />
                <MessageContainer
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente autem similique, provident expedita quis exercitationem
                labore, laboriosam quia atque quos ducimus iste dignissimos ex
                culpa dicta distinctio veritatis aliquam! Ex."
                    type={MessageContainerType.OTHER_USER}
                />
            </div>
        </div>
    );
};

export default ConversationPanel;
