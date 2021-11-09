import './ChatInfo.scss';
import { FC } from 'react';
import { Avatar } from '../../atoms/Avatar';

interface IChatInfoProps {
  name: string;
  status: string;
  gender: 'male' | 'female';
}

export const ChatInfo: FC<IChatInfoProps> = ({ status, name, gender }) => (
  <div className="chat-info">
    <div className="chat-info__avatar">
      <Avatar gender={gender} />
    </div>
    <div className="chat-info__description">
      <h3 className="chat-info__name">{name}</h3>
      <span className="chat-info__status">{status}</span>
    </div>
  </div>
);
