import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { SCREENS } from './endpoints';
import { Chat } from '../Components/templates/Chat';
import { Authorization } from '../Components/templates/Authorization';

export const Routes: FC = () => (
  <Switch>
    <Route path={SCREENS.SCREEN_LOGIN} component={Authorization} exact />
    <Route path={SCREENS.SCREEN_CHAT} component={Chat} exact />
    <Route path={SCREENS.SCREEN_USER_CHAT} component={Chat} exact />
    <Redirect to={SCREENS.SCREEN_LOGIN} />
  </Switch>
);
