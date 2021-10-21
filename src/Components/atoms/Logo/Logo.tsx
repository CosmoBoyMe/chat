import { FC } from 'react';
import LogoSvg from '../../../assets/svg/logo.svg';
import './Logo.scss';

interface IProps {
  size?: 'l' | 'm' | 's';
  className?: string;
}

const Logo: FC<IProps> = ({ size = 'm', className }) => (
  <div className={`logo logo--size-${size} ${className}`}>
    <img className="logo__img" src={LogoSvg} alt="company logo" />
  </div>
);
export default Logo;
