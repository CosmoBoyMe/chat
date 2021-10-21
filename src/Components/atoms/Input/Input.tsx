import { ChangeEvent, FC } from 'react';
import './Input.scss';
import cn from 'classnames';

interface IProps {
  value: string;
  name: string;
  id: string;
  type: 'password' | 'text';
  isValid?: boolean;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({ placeholder, value, name, id, type, onChange, isValid = true }) => (
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

export default Input;
