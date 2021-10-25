import './Logo.scss';
import { FC } from 'react';
import LogoSvg from '../../../assets/svg/logo.svg';

interface ILogoProps {
  size?: 'l' | 'm' | 's';
}

export const Logo: FC<ILogoProps> = ({ size = 'm' }) => (
  <div className={`logo logo--size-${size}`}>
    <img className="logo__img" src={LogoSvg} alt="company logo" />
  </div>
);
