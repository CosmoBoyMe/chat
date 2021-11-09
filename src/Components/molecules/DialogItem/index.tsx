import { FC } from 'react';
import './DialogItem.scss';
import { Avatar } from '../../atoms/Avatar';
import { DialogInfo } from '../../atoms/DialogInfo';

interface IDialogItemProps {
  name: string;
  gender: 'male' | 'female';
}

export const DialogItem: FC<IDialogItemProps> = ({ name, gender }) => (
  <div className="dialog-item">
    <div className="dialog-item__avatar">
      <Avatar gender={gender} />
    </div>
    <div className="dialog-item__dialog-info">
      <DialogInfo name={name} lastMessage="hello" />
    </div>
  </div>
);
