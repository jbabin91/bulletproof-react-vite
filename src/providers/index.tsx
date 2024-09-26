import { Suspense } from 'react';

import { TanstackQueryProvider } from './tanstack-query-provider.tsx';
import { ThemeProvider } from './theme-provider.tsx';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={'Loading...'}>
      <ThemeProvider>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </ThemeProvider>
    </Suspense>
  );
}
