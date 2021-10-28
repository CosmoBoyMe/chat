import './AuthHeader.scss';
import { FC } from 'react';
import { Logo } from '../../atoms/Logo';

export const AuthHeader: FC = () => (
  <div className="auth-header">
    <div className="auth-header__logo">
      <Logo />
    </div>
    <h1 className="auth-header__title">
      Wellcome to
      <span className="auth-header__title--blue"> Chatty</span>
      <span className="auth-header__title--light-blue">!</span>
    </h1>
    <h2 className="auth-header__sub-title">Please, autorize yourself</h2>
  </div>
);
