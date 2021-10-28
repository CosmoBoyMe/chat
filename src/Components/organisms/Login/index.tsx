import './LogIn.scss';
import { FC } from 'react';
import { AuthForm } from '../../molecules/AuthForm';
import { AuthHeader } from '../../molecules/AuthHeader';

export const LogIn: FC = () => (
  <div className="log-in__container">
    <div className="log-in__auth-header">
      <AuthHeader />
    </div>
    <div className="log-in__auth-form">
      <AuthForm />
    </div>
  </div>
);
