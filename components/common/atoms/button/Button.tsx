import React, { FC, ReactNode } from 'react';
import styles from './Button.module.css';
interface Props {
  children: ReactNode;
  buttonStyle?: 'primary' | 'subtle' | 'subtle-inverted';
  onClick?: () => void;
  href?: string;
}
const Button: FC<Props> = ({ children, buttonStyle = 'primary', ...props }) => {
  const CustomTag = props?.href ? 'a' : 'button';
  const linkAttributes = props?.href && { target: '_blank', rel: 'noopener noreferrer' };
  return (
    <CustomTag
      className={[styles['button'], styles['button--' + buttonStyle]].join(' ')}
      {...props}
      {...linkAttributes}
    >
      {children}
    </CustomTag>
  );
};

export default Button;
