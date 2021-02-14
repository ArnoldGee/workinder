import React, { FC } from 'react';
import styles from './Input.module.css';

interface Props {
  type: 'text' | 'email' | 'password';
  name: string;
  onChange: any;
  onBlur: any;
  value: any;
}
const Input: FC<Props> = (props) => {
  return <input className={styles['input']} {...props} />;
};

export default Input;
