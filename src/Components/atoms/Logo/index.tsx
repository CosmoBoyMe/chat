import './Logo.scss';
import { FC } from 'react';
import logoSvg from '../../../assets/svg/logo.svg';

export const Logo: FC = () => <img className="logo__img" src={logoSvg} alt="company logo" />;
