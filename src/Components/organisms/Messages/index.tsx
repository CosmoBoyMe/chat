import './Messages.scss';
import { FC } from 'react';
import cn from 'classnames';
import { Message } from '../../molecules/Message';
import { ISelectedFile } from '../../../interfaces';
import { useAppSelector } from '../../../hooks';
import { authSelect } from '../../../store/Slices/authSlice';

interface IMessages {
  messages: { senderLogin: string; message: string; file: ISelectedFile | null }[];
}

export const Messages: FC<IMessages> = ({ messages }) => {
  const userLogin = useAppSelector(authSelect.userLogin);
  return (
    <div className="messages">
      {messages.map(({ senderLogin, message, file }, index) => {
        const isUserMessage = senderLogin === userLogin;
        return (
          <div
            key={`${senderLogin}_${index}`}
            className={cn('messages__message', {
              'messages__message--right': isUserMessage,
            })}
          >
            <Message isUserMessage={isUserMessage} message={message} file={file} />
          </div>
        );
      })}
    </div>
  );
};
