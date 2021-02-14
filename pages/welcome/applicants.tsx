import React, { FC } from 'react';
import Hero from '../../components/common/atoms/hero/Hero';
import ApplicantsLogin from '../../components/welcome/forms/applicants-login/ApplicantsLogin';

const applicants: FC<Record<string, never>> = () => {
  return (
    <main>
      <Hero bottom>
        <h1 className="big-text text-center">¡Suerte con la búsqueda!</h1>
        <ApplicantsLogin />
      </Hero>
    </main>
  );
};

export default applicants;
