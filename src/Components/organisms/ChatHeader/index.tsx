import './ChatHeader.scss';
import { FC } from 'react';
import { ChatInfo } from '../../molecules/ChatInfo';

interface IChatHeaderProps {
  name: string;
  status: number;
}

export const ChatHeader: FC<IChatHeaderProps> = ({ status, name }) => (
  <header className="chat-header">
    <ChatInfo status={status} name={name} />
  </header>
);
