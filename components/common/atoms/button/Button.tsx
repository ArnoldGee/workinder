import React, { FC, ReactNode } from 'react';
import styles from './Button.module.css';
import NextJsLink from '../next-js-link/NextJsLink';

/**
 *
 */
interface Props {
  children: ReactNode;
  buttonStyle?: 'primary' | 'subtle' | 'subtle-inverted' | 'subtle--business';
  onClick?: () => void;
  href?: string;
  nextHref?: string;
  className?: string;
  business?: boolean;
  type?: 'submit';
}

/**
 * A fully customizable button that can be used as a link or event handler
 * @example Button that acts like a NextJs link
 * <Button nextHref="/welcome/applicants" buttonStyle="subtle">
 *   Encuentra trabajo
 * </Button>
 */
const Button: FC<Props> = ({
  children,
  className,
  buttonStyle = 'primary',
  nextHref,
  business,
  ...props
}) => {
  const CustomTag = props?.href || nextHref ? 'a' : 'button';
  const linkAttributes = props?.href && { target: '_blank', rel: 'noopener noreferrer' };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  buttonStyle = buttonStyle === 'subtle' ? 'subtle' + (business ? '--business' : '') : buttonStyle;
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
