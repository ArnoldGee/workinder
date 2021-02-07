import React, { FC, ReactNode } from 'react';
import styles from './Card.module.css';

interface Props {
  children: ReactNode;
  className?: string;
  padding?: boolean;
  width?: string;
  height?: string;
}
const Card: FC<Props> = ({ children, className, padding = true, ...style }) => {
  return (
    <article
      style={style}
      className={[styles['card'], className, padding && styles['card--padding']].join(' ')}
    >
      {children}
    </article>
  );
};

export default Card;
