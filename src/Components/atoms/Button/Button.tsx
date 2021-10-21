import { FC, ReactNode, MouseEvent } from 'react';

import './Button.scss';

interface IProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type: 'reset' | 'submit' | 'button';
  children: ReactNode;
  className?: string;
}

const Button: FC<IProps> = ({ onClick, disabled, children, type, className }) => (
  <button className={`button ${className}`} onClick={onClick} disabled={disabled} type={type}>
    {children}
  </button>
);
export default Button;
