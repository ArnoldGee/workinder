import React, { FC, ReactNode } from 'react';
import styles from './Card.module.css';

interface Props {
  children: ReactNode;
  className?: string;
  padding?: boolean;
  width?: number;
  height?: number;
}
const Card: FC<Props> = ({ children, className, padding = true, width = 350, height = 500 }) => {
  return (
    <article
      style={{ width: `${width}px`, height: `${height}px` }}
      className={[styles['card'], className, padding && styles['card--padding']].join(' ')}
    >
      {children}
    </article>
  );
};

export default Card;
