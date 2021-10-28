import { FC } from 'react';
import cn from 'classnames';
import './Message.scss';

interface IMessageProps {
  isUserMessage?: boolean;
  message?: string;
}

export const Message: FC<IMessageProps> = ({ isUserMessage = false, message }) => {
  const messages = {
    message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
  };

  return (
    <p
      className={cn('message', {
        'message-user': isUserMessage,
        'message-companion': !isUserMessage,
      })}
    >
      {messages.message}
    </p>
  );
};
