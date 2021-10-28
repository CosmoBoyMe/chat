import './Messages.scss';
import { FC } from 'react';
import cn from 'classnames';
import { Message } from '../../atoms/Message';

interface IMessage {
  message: string;
  isUserMessage: boolean;
}

interface IMessagesProps {
  messages: { dialogId: number; messages: IMessage[] };
}

export const Messages: FC<IMessagesProps> = ({ messages }) => (
  <div className="messages">
    {messages.messages.map((item: { message: string; isUserMessage: boolean }, index) => (
      <div
        key={`${messages.dialogId}_${index}`}
        className={cn('messages__message', {
          'messages__message--right': item.isUserMessage,
        })}
      >
        <Message isUserMessage={item.isUserMessage} message={item.message} />
      </div>
    ))}
  </div>
);
