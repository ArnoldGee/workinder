import React, { FC, ReactNode } from 'react';
import styles from './Button.module.css';
import NextJsLink from '../next-js-link/NextJsLink';
interface Props {
  children: ReactNode;
  buttonStyle?: 'primary' | 'subtle' | 'subtle-inverted';
  onClick?: () => void;
  href?: string;
  nextHref?: string;
  className?: string;
}

const Button: FC<Props> = ({
  children,
  className,
  buttonStyle = 'primary',
  nextHref,
  ...props
}) => {
  const CustomTag = props?.href || nextHref ? 'a' : 'button';
  const linkAttributes = props?.href && { target: '_blank', rel: 'noopener noreferrer' };
  return (
    <NextJsLink href={nextHref}>
      <CustomTag
        className={[styles['button'], styles['button--' + buttonStyle], className].join(' ')}
        {...props}
        {...linkAttributes}
      >
        {children}
      </CustomTag>
    </NextJsLink>
  );
};

export default Button;
