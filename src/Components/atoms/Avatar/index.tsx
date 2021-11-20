import './Avatar.scss';
import { FC } from 'react';
import maleAvatar from '../../../assets/svg/genderMale.svg';
import femaleAvatar from '../../../assets/svg/genderFemale.svg';

interface AvatarProps {
  gender: 'male' | 'female';
}

export const Avatar: FC<AvatarProps> = ({ gender }) => (
  <img className="avatar" src={gender === 'male' ? maleAvatar : femaleAvatar} alt="user avatar" />
);
