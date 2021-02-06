import React, { FC, ReactNode } from 'react';
import styles from './Section.module.css';

interface Props {
  children: ReactNode;
  className?: string;
}
const Section: FC<Props> = ({ children, className }) => {
  return <section className={[styles['Section'], className].join(' ')}>{children}</section>;
};

export default Section;
