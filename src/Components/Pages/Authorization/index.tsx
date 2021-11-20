import './Authorization.scss';
import { FC } from 'react';
import { LogIn } from '../../organisms/Login';

export const Authorization: FC = () => {
  return (
    <div className="authorization">
      <div className="authorization__log-in">
        <LogIn />
      </div>
      <div className="authorization__background" />
    </div>
  );
};
