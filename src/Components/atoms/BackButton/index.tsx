import './BackButton.scss';
import { FC, MouseEventHandler } from 'react';

interface IBackButton {
  onClick: MouseEventHandler;
}

export const BackButton: FC<IBackButton> = ({ onClick }) => (
  <button onClick={onClick} type="button" className="back-btn" aria-label="back button" />
);
