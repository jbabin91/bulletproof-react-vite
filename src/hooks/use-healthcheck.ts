import { useQuery } from '@tanstack/react-query';
import ky from 'ky';

import { env } from '@/config/env';

export async function getHealthcheck() {
  const response = await ky
    .get(`${env.VITE_API_URL}/healthcheck`)
    .json<{ ok: boolean }>();
  return response;
}

export function useHealthcheck() {
  return useQuery({ queryFn: getHealthcheck, queryKey: ['healthcheck'] });
}
