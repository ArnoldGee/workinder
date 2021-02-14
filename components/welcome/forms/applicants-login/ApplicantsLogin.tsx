import React, { FC } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './ApplicantsLogin.module.css';
import Button from '../../../common/atoms/button/Button';
import Card from '../../../common/atoms/card/Card';
import Input from '../../../common/atoms/input/Input';

export interface FormikProps {
  name: string;
  surname: string;
  sector: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const ApplicantsLogin: FC<Record<string, never>> = () => {
  const initialValues: FormikProps = {
    name: '',
    surname: '',
    sector: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  const schema = yup.object({
    name: yup.string().required(),
    surname: yup.string().required(),
    sector: yup.string().required(),
    email: yup.string().email('Entre un email válido').required(),
    password: yup.string().required(),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password')], "Password's not match")
      .required(),
  });

  const onSubmit = (): void => {
    console.log('Hello world');
  };

  return (
    <div className={styles['ApplicantsLogin']}>
      <div className={styles['ApplicantsLogin__form-box']}>
        <nav className={styles['buttons-container']}>
          <Button buttonStyle={'subtle'}>Nuevo Usuario</Button>
          <Button buttonStyle={'subtle-inverted'}>Login</Button>
        </nav>
        <Card shadowStyle={'primary'}>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
                <input
                  type="text"
                  name="surname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.surname && touched.surname && errors.surname}
                <input
                  type="text"
                  name="sector"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sector}
                />
                {errors.sector && touched.sector && errors.sector}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <input
                  type="password"
                  name="repeatPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeatPassword}
                />
                {errors.repeatPassword && touched.repeatPassword && errors.repeatPassword}
                <Button type="submit">Submit</Button>
              </form>
            )}
          </Formik>
        </Card>
      </div>
    </div>
  );
};

export default ApplicantsLogin;
