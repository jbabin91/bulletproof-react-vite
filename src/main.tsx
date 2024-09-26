import '@/styles/globals.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/App.tsx';
import { TailwindIndicator, TanstackQueryDevtools } from '@/components/utils';
import { Providers } from '@/providers';
import { enableMocking } from '@/testing/mocks';

const root = document.querySelector('#root');
if (!root) throw new Error('No root element found');

// eslint-disable-next-line unicorn/prefer-top-level-await
enableMocking().then(() => {
  createRoot(root).render(
    <StrictMode>
      <Providers>
        <App />
        <TanstackQueryDevtools />
        <TailwindIndicator />
      </Providers>
    </StrictMode>,
  );
});
