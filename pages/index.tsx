import React, { FC, ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const index: FC<Props> = ({ children }) => {
  return <div className="index">{children}</div>;
};

export default index;
