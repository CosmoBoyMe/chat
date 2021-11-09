import './Authorization.scss';
import { FC } from 'react';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { LogIn } from '../../organisms/Login';
import { RootState } from '../../../store';
import { SCREENS } from '../../../routes/endpoints';

export const Authorization: FC = () => {
  // const { isAuth }: { isAuth: boolean } = useSelector((state: RootState) => state.auth);
  // if (isAuth) {
  //   return <Redirect to={SCREENS.SCREEN_CHAT} />;
  // }

  return (
    <div className="authorization">
      <div className="authorization__log-in">
        <LogIn />
      </div>
      <div className="authorization__background" />
    </div>
  );
};
