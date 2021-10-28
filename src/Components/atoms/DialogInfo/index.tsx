import { FC } from 'react';
import './DialogInfo.scss';

interface IDialogInfo {
  name: string;
  lastMessage: any;
}

export const DialogInfo: FC<IDialogInfo> = ({ name, lastMessage }) => (
  <div className="dialog-info">
    <h4 className="dialog-info__name">{name}</h4>
    <p className="sub-text dialog-info__last-message">
      {lastMessage.isUserMessage && <span className="dialog-info__user-message">You: </span>}
      {lastMessage.message}
    </p>
  </div>
);
