/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { RecoilRoot } from 'recoil';
import React from 'react';
import UIEvents from '../components/ui-events/UIEvents';
import '../styles/index.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <UIEvents>
        <Component {...pageProps} />
      </UIEvents>
    </RecoilRoot>
  );
}
