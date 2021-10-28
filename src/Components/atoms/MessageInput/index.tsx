import { FC } from 'react';
import './MessageInput.scss';

export const MessageInput: FC = () => (
  <input className="message-input" placeholder="Write something..." type="text" />
);
