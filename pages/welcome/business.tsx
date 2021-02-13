import React, { FC } from 'react';
import styles from './applicants.module.css';
import Hero from '../../components/common/atoms/hero/Hero';
import Card from '../../components/common/atoms/card/Card';

const applicants: FC<Record<string, never>> = () => {
  return (
    <main className={styles['applicants']}>
      <Hero bottom>
        <h1 className="big-text">¡Suerte con la búsqueda!</h1>
        <Card>Hello world</Card>
      </Hero>
    </main>
  );
};

export default applicants;
