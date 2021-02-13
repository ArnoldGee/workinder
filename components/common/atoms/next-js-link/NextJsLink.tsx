import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  href?: string;
}

const NextJsLink: FC<Props> = ({ children, href }) =>
  href ? <Link href={href}>{children}</Link> : <>{children}</>;

export default NextJsLink;
