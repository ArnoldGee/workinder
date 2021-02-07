import React, { FC } from 'react';
import styles from './Home.module.css';
import Hero from '../components/common/atoms/hero/Hero';
import Button from '../components/common/atoms/button/Button';
import Section from '../components/common/atoms/section/Section';
import Card from '../components/common/atoms/card/Card';

const index: FC<Record<string, never>> = () => {
  return (
    <div className="index">
      <Hero className={styles['hero-1']} bottom>
        <div>
          <h1>Jinder</h1>
          <h1 className="big-text">¿Y si buscar empleo fuese fácil como Tinder? ;)</h1>
          <article className={styles['hero-1__buttons-container']}>
            <Button buttonStyle="subtle">Encuentra trabajo</Button>
            <Button buttonStyle="subtle-inverted">Regístrate como empresa</Button>
          </article>
        </div>
        <div className={styles['image-container']}>
          <img
            className={styles['image']}
            src="/assets/Home/Saly-1.png"
            alt="A person finding a job"
          />
        </div>
      </Hero>
      <Section>
        <h1 className="text-gradient text-center">¿Y por qué no?</h1>
        <article className={styles['three-rows']}>
          <Card>
            <img
              className={styles['card-image']}
              src="/assets/Home/briefcase.png"
              alt="A person finding a job"
            />
            <h3 className={styles['card-title']}>Sin trámites ni papeleo</h3>
            <p>
              Olvídate de rellenar formularios y escribir cartas de presentación. Crea un perfil en
              menos de un minuto y empieza a recibir ofertas.
            </p>
          </Card>
          <Card>
            <img
              className={styles['card-image']}
              src="/assets/Home/megaphone.png"
              alt="A person finding a job"
            />
            <h3 className={styles['card-title']}>Date a conocer</h3>
            <p>
              Se ha acabado mandar cartas interminables que las empresas nunca leerán. Workinder se
              asegura que todas las empresas conocen tu perfil.
            </p>
          </Card>
          <Card>
            <img
              className={styles['card-image']}
              src="/assets/Home/telescope.png"
              alt="A person finding a job"
            />
            <h3 className={styles['card-title']}>Los mejores empleos</h3>
            <p>
              Sé el primero de aplicar a las ofertas recientes y recibe recomendaciones
              personalizadas según tu perfil.
            </p>
          </Card>
        </article>
      </Section>
      <Hero top>
        <h1 style={{ marginTop: '3rem' }} className="text-center">
          No esperes más
        </h1>
        <article className={styles['hero-2__buttons-container']}>
          <Button buttonStyle="subtle">Encuentra trabajo</Button>
          <Button buttonStyle="subtle-inverted">Regístrate como empresa</Button>
        </article>
      </Hero>
    </div>
  );
};

export default index;
