import { ChangeEventHandler, FC } from 'react';
import fileClip from '../../../assets/svg/fileClip.svg';
import './FileInput.scss';

interface IFileInputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const FileInput: FC<IFileInputProps> = ({ onChange }) => (
  <div className="file-input">
    <label className="file-input__label" htmlFor="file-input">
      <img className="file-input__img" src={fileClip} alt="clip" />
      <input className="file-input__input" onChange={onChange} id="file-input" type="file" />
    </label>
  </div>
);
