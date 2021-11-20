import './DialogInfo.scss';
import { FC } from 'react';

interface IDialogInfo {
  name: string;
  lastMessage: string | null;
  isUserMessage: boolean;
  fileName: string | null;
}

export const DialogInfo: FC<IDialogInfo> = ({ name, lastMessage, isUserMessage, fileName }) => (
  <div className="dialog-info">
    <h4 className="dialog-info__name">{name}</h4>
    <p className="sub-text dialog-info__last-message">
      {isUserMessage && <span className="dialog-info__user-message">You: </span>}
      {lastMessage || fileName}
    </p>
  </div>
);
