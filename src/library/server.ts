import { hc } from 'hono/client';

import { env } from '@/helpers/env';

import { IServer } from '@/app/api/[[...route]]/route';

export const client = hc<IServer>(env.APP_URL!);
