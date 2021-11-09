import './ChatHeader.scss';
import { FC, MouseEventHandler } from 'react';
import { useHistory } from 'react-router';
import { ChatInfo } from '../../molecules/ChatInfo';
import { BackButton } from '../../atoms/BackButton';
import { SCREENS } from '../../../routes/endpoints';

interface IChatHeaderProps {
  name: string;
  status: string;
  gender: 'male' | 'female';
}

export const ChatHeader: FC<IChatHeaderProps> = ({ status, name, gender }) => {
  const history = useHistory();
  const handlerClickBackButton: MouseEventHandler = () => {
    history.push(SCREENS.SCREEN_CHAT);
  };

  return (
    <header className="chat-header">
      <div className="chat-header__back-btn">
        <BackButton onClick={handlerClickBackButton} />
      </div>
      <ChatInfo status={status} name={name} gender={gender} />
    </header>
  );
};
