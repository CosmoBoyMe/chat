import { FC } from 'react';
import './DialogItem.scss';
import { Avatar } from '../../atoms/Avatar';
import { DialogInfo } from '../../atoms/DialogInfo';

interface IDialogItemProps {
  name: string;
  gender: 'male' | 'female';
  lastMessage: null | string;
  isUserMessage: boolean;
  fileName: string | null;
}

export const DialogItem: FC<IDialogItemProps> = ({ name, gender, lastMessage, isUserMessage, fileName }) => (
  <div className="dialog-item">
    <div className="dialog-item__avatar">
      <Avatar gender={gender} />
    </div>
    <div className="dialog-item__dialog-info">
      <DialogInfo name={name} lastMessage={lastMessage} isUserMessage={isUserMessage} fileName={fileName} />
    </div>
  </div>
);
