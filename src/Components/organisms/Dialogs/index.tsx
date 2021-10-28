import './Dialogs.scss';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import emptyDialogsSvg from '../../../assets/svg/empty-dialogs.svg';

import { DialogItem } from '../../molecules/DialogItem';

interface IDialogsProps {
  data: Array<any>;
}

export const Dialogs: FC<IDialogsProps> = ({ data }) => (
  <div className="dialogs">
    {data.map(({ dialogId, name, gender, messages }) => (
      <NavLink
        key={dialogId}
        className="dialogs__link"
        activeClassName="dialogs__link--active"
        to={`/chat/${dialogId}`}
      >
        <DialogItem dialogId={dialogId} name={name} gender={gender} message={messages.messages} />
      </NavLink>
    ))}
    {!data.length && (
      <div className="dialogs__empty">
        <img className="dialogs__empty-img" src={emptyDialogsSvg} alt="dialogs empty" />
        <h4 className="dialogs__empty-title">There is no other users yet</h4>
      </div>
    )}
  </div>
);
