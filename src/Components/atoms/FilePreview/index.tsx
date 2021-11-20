import './FilePreview.scss';
import { FC } from 'react';
import { convertSizeToMb } from '../../../helpers';
import { ISelectedFile } from '../../../interfaces';

interface IFilePreviewProps {
  file: ISelectedFile;
}

export const FilePreview: FC<IFilePreviewProps> = ({ file: { fileUrl, name, size } }) => (
  <div className="file-preview">
    <a className="file-preview__link" href={fileUrl} target="_blank" rel="noreferrer">
      <img className="file-preview__img" src={fileUrl} alt="file type" />
      <div className="file-preview__info">
        <p className="file-preview__name">{name}</p>
        <p className="file-preview__size">{`${convertSizeToMb(size)} MB`}</p>
      </div>
    </a>
  </div>
);
