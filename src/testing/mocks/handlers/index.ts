import { http, HttpResponse } from 'msw';

import { env } from '@/config/env';
import { networkDelay } from '@/testing/mocks/utils';

export const handlers = [
  http.get(`${env.VITE_API_URL}/healthcheck`, async () => {
    await networkDelay();
    return HttpResponse.json({ ok: true });
  }),
];
