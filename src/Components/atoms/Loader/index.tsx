import './Loader.scss';
import { FC } from 'react';
import LoaderSvg from '../../../assets/svg/loader.svg';

export const Loader: FC = () => (
  <div className="loader">
    <img className="loader__img" src={LoaderSvg} alt="loading" />
  </div>
);
