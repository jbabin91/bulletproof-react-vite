import { http, HttpResponse } from 'msw';

import { env } from '@/config/env.ts';
import { networkDelay } from '@/testing/mocks/utils.ts';

import { authHandlers } from './auth.ts';
import { commentsHandlers } from './comments.ts';
import { discussionsHandlers } from './discussions.ts';
import { teamsHandlers } from './teams.ts';
import { usersHandlers } from './users.ts';

export const handlers = [
  ...authHandlers,
  ...commentsHandlers,
  ...discussionsHandlers,
  ...teamsHandlers,
  ...usersHandlers,
  http.get(`${env.VITE_API_URL}/healthcheck`, async () => {
    await networkDelay();
    return HttpResponse.json({ ok: true });
  }),
];
