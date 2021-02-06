import React, { FC, ReactNode, useState } from 'react';
import styles from './NavIcon.module.css';

interface Props {
  children: ReactNode;
}
const NavIcon: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <button className={[styles['NavIcon'], open && styles['NavIcon--open']].join(' ')}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <figure onClick={() => setOpen(!open)} className={styles['NavIcon__figure']}>
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.3919 29.8217C19.0579 29.8217 21.9959 32.7883 21.9959 36.4804V45.3439C21.9959 49.01 19.0579 52 15.3919 52H6.60397C2.96399 52 0 49.01 0 45.3439V36.4804C0 32.7883 2.96399 29.8217 6.60397 29.8217H15.3919ZM45.396 29.8217C49.036 29.8217 52 32.7883 52 36.4804V45.3439C52 49.01 49.036 52 45.396 52H36.6081C32.9421 52 30.0041 49.01 30.0041 45.3439V36.4804C30.0041 32.7883 32.9421 29.8217 36.6081 29.8217H45.396ZM15.3919 0C19.0579 0 21.9959 2.99005 21.9959 6.6587V15.5222C21.9959 19.2143 19.0579 22.1783 15.3919 22.1783H6.60397C2.96399 22.1783 0 19.2143 0 15.5222V6.6587C0 2.99005 2.96399 0 6.60397 0H15.3919ZM45.396 0C49.036 0 52 2.99005 52 6.6587V15.5222C52 19.2143 49.036 22.1783 45.396 22.1783H36.6081C32.9421 22.1783 30.0041 19.2143 30.0041 15.5222V6.6587C30.0041 2.99005 32.9421 0 36.6081 0H45.396Z"
            fill="white"
          />
        </svg>
      </figure>
      {open && <nav className={styles['NavIcon__nav-links']}> {children}</nav>}
    </button>
  );
};

export default NavIcon;
