import { RecoilRoot } from 'recoil';
import React from 'react';
import UIEvents from '../components/ui-events/UIEvents';
import '../styles/index.css';
import Navigation from '../components/navigation/Navigation';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <UIEvents>
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </UIEvents>
    </RecoilRoot>
  );
}
