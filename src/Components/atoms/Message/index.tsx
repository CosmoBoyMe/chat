import { FC } from 'react';
import cn from 'classnames';
import './Message.scss';

interface IMessageProps {
  isUserMessage: boolean;
  message: string;
}

export const Message: FC<IMessageProps> = ({ isUserMessage, message }) => (
  <p
    className={cn('message', {
      'message-user': isUserMessage,
      'message-companion': !isUserMessage,
    })}
  >
    {message}
  </p>
);
