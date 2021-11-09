import './SignUp.scss';
import { FC } from 'react';
import { SignUpForm } from '../../molecules/SignUpForm';
import { Logo } from '../../atoms/Logo';

export const SignUp: FC = () => (
  <div className="sign-up">
    <div className="sign-up__inner">
      <header className="sign-up__header">
        <div className="sign-up__logo">
          <Logo />
        </div>
        <h1 className="sign-up__title">
          Sign Up to
          <span className="sign-up__title--blue">Chatty</span>
          <span className="sign-up__title--light-blue">!</span>
        </h1>
        <h2 className="sign-up__header-sub-title">Registration</h2>
      </header>
      <SignUpForm />
    </div>
  </div>
);
