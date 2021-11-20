import './Button.scss';
import cn from 'classnames';
import { FC, MouseEvent } from 'react';

interface IButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type: 'reset' | 'submit' | 'button';
}

export const Button: FC<IButtonProps> = ({ onClick, disabled, children, type }) => (
  <button
    className={cn('button', {
      'button--white': type === 'button',
    })}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {children}
  </button>
);
