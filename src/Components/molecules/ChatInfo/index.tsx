import './ChatInfo.scss';
import { FC } from 'react';
import { Avatar } from '../../atoms/Avatar';

interface IChatInfoProps {
  name: string;
  status: number;
}

export const ChatInfo: FC<IChatInfoProps> = ({ status, name }) => (
  <div className="chat-info">
    <div className="chat-info__avatar">
      <Avatar />
    </div>
    <div className="chat-info__description">
      <h3 className="chat-info__name">{name}</h3>
      <span className="chat-info__status">
        {status ? `last seen ${status} minutes ago` : 'online '}
      </span>
    </div>
  </div>
);
