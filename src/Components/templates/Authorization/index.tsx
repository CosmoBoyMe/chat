import './Authorization.scss';
import { FC } from 'react';
import { LogIn } from '../../organisms/Login';
import LogInImg from '../../../assets/svg/auth-background.svg';

export const Authorization: FC = () => (
  <div className="authorization">
    <div className="authorization__log-in">
      <LogIn />
    </div>
    <div className="authorization__background" />
  </div>
);
