import './MessageInput.scss';
import { ChangeEventHandler, FC } from 'react';

interface IMessageInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const MessageInput: FC<IMessageInputProps> = ({ onChange, value }) => {
  return <input className="message-input" onChange={onChange} value={value} placeholder="Write something..." type="text" />;
};
