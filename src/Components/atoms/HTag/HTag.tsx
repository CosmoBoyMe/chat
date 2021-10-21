import { ReactNode, FC } from 'react';
import './HTag.scss';

interface IProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4';
  children: ReactNode;
  className?: string;
}

const HTag: FC<IProps> = ({ tag, children, className }) => {
  switch (tag) {
    case 'h1':
      return <h1 className={`title title__${tag} ${className}`}>{children}</h1>;
    case 'h2':
      return <h2 className={`title title__${tag} ${className}`}>{children}</h2>;
    case 'h3':
      return <h3 className={`title title__${tag} ${className}`}>{children}</h3>;
    case 'h4':
      return <h4 className={`title title__${tag} ${className}`}>{children}</h4>;
    default:
      return <></>;
  }
};

export default HTag;
