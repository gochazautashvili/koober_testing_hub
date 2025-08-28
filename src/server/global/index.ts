import { Hono } from 'hono';

import { IProfessionResponse } from './services/models';
import { member_selector } from './services/selectors';

import { requireAuthMiddleware } from '@/auth';
import { getErrorMessage } from '@/helpers';
import { errors } from '@/constants';
import { db } from '@/library';

const app = new Hono()
  // Members
  .get('/members', requireAuthMiddleware, async (c) => {
    try {
      const response = await db.user.findMany({ select: member_selector });

      return c.json(response, { status: 200 });
    } catch (error) {
      return c.json(`${errors.server_error}. ${getErrorMessage(error)}`, { status: 500 });
    }
  })
  // Professions
  .get('/professions', requireAuthMiddleware, async (c) => {
    try {
      const data = await db.profession.findMany({ select: { id: true, name: true } });

      const response: IProfessionResponse[] = data;

      return c.json(response, { status: 200 });
    } catch (error) {
      return c.json(`${errors.server_error}. ${getErrorMessage(error)}`, { status: 500 });
    }
  });

export default app;
