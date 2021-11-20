import './Header.scss';
import { FC } from 'react';
import { Logo } from '../../atoms/Logo';
import profileIcon from '../../../assets/svg/profile.svg';

export const Header: FC = () => (
  <header className="header">
    <div className="header__logo">
      <Logo />
    </div>
    <div className="header__profile">
      <a className="header__profile-link" href="#main">
        <img className="header__profile-img" src={profileIcon} alt="user profile" />
      </a>
    </div>
  </header>
);
