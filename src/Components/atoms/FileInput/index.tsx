import { FC } from 'react';
import './FileInput.scss';

export const FileInput: FC = () => (
  <div className="file-input">
    <label className="file-input__label" htmlFor="file-input">
      <input className="file-input__input" id="file-input" type="file" />
    </label>
  </div>
);
