import './Registration.scss';
import { FC } from 'react';
import { SignUp } from '../../organisms/SignUp';

export const Registration: FC = () => (
  <div className="registration">
    <div className="registration__inner">
      <div className="registration__sign-up">
        <SignUp />
      </div>
      <div className="registration__bg" />
    </div>
  </div>
);
