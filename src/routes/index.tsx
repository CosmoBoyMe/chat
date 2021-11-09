import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { SCREENS } from './endpoints';
import { Chat } from '../Components/Pages/Chat';
import { Authorization } from '../Components/Pages/Authorization';
import { Registration } from '../Components/Pages/Registration';

export const Routes: FC = () => (
  <Switch>
    <Route path={SCREENS.SCREEN_LOGIN} component={Authorization} exact />
    <Route path={SCREENS.SCREEN_CHAT} component={Chat} exact />
    <Route path={SCREENS.SCREEN_USER_CHAT} component={Chat} exact />
    <Route path={SCREENS.SCREEN_USER_SIGN_UP} component={Registration} exact />
    <Redirect to={SCREENS.SCREEN_CHAT} />
  </Switch>
);
