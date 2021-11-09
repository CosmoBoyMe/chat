import './ChatBottom.scss';
import { FC } from 'react';
import { FileInput } from '../../atoms/FileInput';
import { MessageButton } from '../../atoms/MessageButton';
import { MessageInput } from '../../atoms/MessageInput';

export const ChatBottom: FC = () => (
  <>
    <div className="chat-bottom">
      <div className="chat-bottom__file-input">
        <FileInput />
      </div>
      <div className="chat-bottom__message-input">
        <MessageInput />
      </div>
      <div className="chat-bottom__message-button">
        <MessageButton />
      </div>
    </div>
  </>
);
