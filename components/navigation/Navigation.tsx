import React, { FC, ReactNode } from 'react';
import NavIcon from './nav-icon/NavIcon';

interface Props {
  children: ReactNode;
}
const Navigation: FC<Props> = ({ children }) => {
  return (
    <>
      <NavIcon>
        <ul>
          <li>Do U know da wey</li>
          <li>Seymour Good lord</li>
          <li>I am the yeast of thoughts and mind</li>
          <li>Bitconneect</li>
        </ul>
      </NavIcon>
      {children}
    </>
  );
};

export default Navigation;
