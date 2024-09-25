import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  client: {
    VITE_API_URL: z.string(),
    VITE_APP_MOCK_API_PORT: z.string().optional().default('8080'),
    VITE_APP_URL: z.string().optional().default('http://localhost:5173'),
    VITE_ENABLE_API_MOCKING: z
      .string()
      .refine((s) => s === 'true' || s === 'false')
      .transform((s) => s === 'true')
      .optional(),
  },
  clientPrefix: 'VITE_',
  runtimeEnv: import.meta.env,
});
