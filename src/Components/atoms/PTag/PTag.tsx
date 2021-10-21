import { ReactNode, FC } from 'react';

interface IProps {
  size: 'l' | 'm';
  children: ReactNode;
}

const PTag: FC<IProps> = ({ size = 'l', children }) => (
  <p className={`text text--size-${size}`}>{children}</p>
);

export default PTag;
