import React, { FC, ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const UIEvents: FC<Props> = ({ children }) => {
  return <div className="UIEvents">{children}</div>;
};

export default UIEvents;
