import React, { FC } from 'react';
import Button from '../components/common/atoms/button/Button';

const index: FC<Record<string, never>> = () => {
  return (
    <div className="index">
      <Button>Click me</Button>
    </div>
  );
};

export default index;
