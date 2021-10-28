import './Logo.scss';
import { FC } from 'react';
import LogoSvg from '../../../assets/svg/logo.svg';

export const Logo: FC = () => <img className="logo__img" src={LogoSvg} alt="company logo" />;
