import './Avatar.scss';
import { FC } from 'react';
import maleAvatar from '../../../assets/svg/default-male.svg';
import femaleAvatar from '../../../assets/svg/default-female.svg';

interface AvatarProps {
  gender?: 'male' | 'female';
}

export const Avatar: FC<AvatarProps> = ({ gender }) => (
  <img className="avatar" src={gender === 'male' ? maleAvatar : femaleAvatar} alt="user avatar" />
);
