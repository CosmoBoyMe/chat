import { FC, MouseEventHandler } from 'react';
import './BackButton.scss';

interface IBackButton {
  onClick: MouseEventHandler;
}

export const BackButton: FC<IBackButton> = ({ onClick }) => (
  <button onClick={onClick} type="button" className="back-btn" aria-label="come back" />
);
