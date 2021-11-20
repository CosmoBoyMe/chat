import './Message.scss';
import cn from 'classnames';
import { FC } from 'react';
import { FilePreview } from '../../atoms/FilePreview';
import { ISelectedFile } from '../../../interfaces';

interface IMessageProps {
  isUserMessage: boolean;
  message: string;
  file: ISelectedFile | null;
}

export const Message: FC<IMessageProps> = ({ isUserMessage, message, file }) => (
  <div
    className={cn('message', {
      'message-user': isUserMessage,
      'message-companion': !isUserMessage,
    })}
  >
    {file && (
      <div className="message__file">
        <FilePreview file={file} />
      </div>
    )}
    <p className="message__text">{message}</p>
  </div>
);
