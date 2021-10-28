import { FC } from 'react';
import './DialogItem.scss';
import { Avatar } from '../../atoms/Avatar';
import { DialogInfo } from '../../atoms/DialogInfo';

interface IDialogItemProps {
  dialogId: number;
  name: string;
  gender: 'male' | 'female';
  message: [{ message: string; isUserMessage: boolean }];
}

export const DialogItem: FC<IDialogItemProps> = ({ dialogId, name, gender, message }) => (
  <div className="dialog-item">
    <div className="dialog-item__avatar">
      <Avatar gender={gender} />
    </div>
    <div className="dialog-item__dialog-info">
      <DialogInfo name={name} lastMessage={message[message.length - 1]} />
    </div>
  </div>
);
