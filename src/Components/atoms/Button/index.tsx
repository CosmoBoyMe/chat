import './Button.scss';
import { FC, MouseEvent } from 'react';
import cn from 'classnames';

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
