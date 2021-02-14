import React, { FC } from 'react';
import Hero from '../../components/common/atoms/hero/Hero';

const applicants: FC<Record<string, never>> = () => {
  return (
    <main>
      <Hero business bottom>
        <h1 className="big-text text-center">Acceso empresas</h1>
      </Hero>
    </main>
  );
};

export default applicants;
