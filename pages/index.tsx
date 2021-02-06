import React, { FC } from 'react';
import Hero from '../components/common/atoms/hero/Hero';

const index: FC<Record<string, never>> = () => {
  return (
    <div className="index">
      <Hero bottom>
        <h1>Workinder</h1>
      </Hero>
    </div>
  );
};

export default index;
