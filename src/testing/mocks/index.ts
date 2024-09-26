import { env } from '@/config/env.ts';

export async function enableMocking() {
  if (env.VITE_ENABLE_API_MOCKING) {
    const { worker } = await import('./browser');
    // const { initialDb } = await import('./db');
    // await initializeDb();
    return worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
}
