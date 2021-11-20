import './SendMsgButton.scss';
import cn from 'classnames';
import { FC, MouseEvent } from 'react';

interface ISendMsgButton {
  disabled?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const SendMsgButton: FC<ISendMsgButton> = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={cn('send-message-button', {
      'send-message-button--disabled': disabled,
    })}
    aria-label="send message button"
    type="button"
  />
);
