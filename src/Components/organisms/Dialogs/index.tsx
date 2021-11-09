import './Dialogs.scss';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import emptyDialogsSvg from '../../../assets/svg/empty-dialogs.svg';
import { DialogItem } from '../../molecules/DialogItem';
import { RootState } from '../../../store';

export const Dialogs: FC = () => {
  const { dialogs } = useSelector((state: RootState) => state.dialogs);
  return (
    <div className="dialogs">
      {dialogs &&
        dialogs.map(({ name, gender }, index) => (
          <NavLink
            key={`name_${index}`}
            className="dialogs__link"
            activeClassName="dialogs__link--active"
            to={`/chat/${index}`}
          >
            <DialogItem name={name} gender={gender} />
          </NavLink>
        ))}
      {!dialogs && (
        <div className="dialogs__empty">
          <img className="dialogs__empty-img" src={emptyDialogsSvg} alt="dialogs empty" />
          <h4 className="dialogs__empty-title">There is no other users yet</h4>
        </div>
      )}
    </div>
  );
};
