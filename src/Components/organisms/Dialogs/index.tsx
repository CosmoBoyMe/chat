import './Dialogs.scss';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { DialogItem } from '../../molecules/DialogItem';
import { useAppSelector } from '../../../hooks';
import { dialogsSelect } from '../../../store/Slices/dialogsSlice';
import { messagesSelect } from '../../../store/Slices/messagesSlice';
import { authSelect } from '../../../store/Slices/authSlice';
import emptyDialogsSvg from '../../../assets/svg/empty-dialogs.svg';

export const Dialogs: FC = () => {
  const dialogs = useAppSelector(dialogsSelect.dialogs);
  const messages = useAppSelector(messagesSelect.messages);
  const userLogin = useAppSelector(authSelect.userLogin);
  return (
    <div className="dialogs">
      {dialogs &&
        dialogs.map(({ name, gender }, index) => {
          const lastMessageIndex = messages[index]?.length - 1 ?? 0;
          const lastMessage = messages[index] ? messages[index][lastMessageIndex] : null;
          return (
            <NavLink
              key={`name_${index}`}
              className="dialogs__link"
              activeClassName="dialogs__link--active"
              to={`/chat/${index}`}
            >
              <DialogItem
                name={name}
                gender={gender}
                isUserMessage={lastMessage?.senderLogin === userLogin}
                fileName={lastMessage?.file?.name}
                lastMessage={lastMessage?.message}
              />
            </NavLink>
          );
        })}
      {!dialogs && (
        <div className="dialogs__empty">
          <img className="dialogs__empty-img" src={emptyDialogsSvg} alt="dialogs empty" />
          <p className="dialogs__empty-text">There is no other users yet</p>
        </div>
      )}
    </div>
  );
};
