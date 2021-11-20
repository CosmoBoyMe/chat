import './Input.scss';
import cn from 'classnames';
import { ChangeEvent, FC } from 'react';

interface IInputProps {
  value: string;
  name: string;
  id: string;
  type: 'password' | 'text';
  isValid?: boolean;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInputProps> = ({ placeholder, value, name, id, type, onChange, isValid = true }) => (
  <div
    className={cn('input-field', {
      'input-field--error': !isValid,
    })}
  >
    <input
      className="input-field__input"
      name={name}
      value={value}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  </div>
);
