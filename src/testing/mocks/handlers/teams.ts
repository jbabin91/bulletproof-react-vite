import { http, HttpResponse } from 'msw';

import { env } from '@/config/env.ts';
import { db } from '@/testing/mocks/db.ts';
import { networkDelay } from '@/testing/mocks/utils.ts';

export const teamsHandlers = [
  http.get(`${env.VITE_API_URL}/teams`, async () => {
    await networkDelay();

    try {
      const result = db.team.getAll();
      return HttpResponse.json({ data: result });
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message ?? 'Server Error' },
        { status: 500 },
      );
    }
  }),
];
