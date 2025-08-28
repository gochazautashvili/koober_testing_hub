import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';

import { Prisma } from '@/generated/prisma/prisma';

import { requireRoleMiddleware } from '@/auth';
import { getErrorMessage } from '@/helpers';
import { db } from '@/library/database';
import { errors } from '@/constants';

import { member_query_schema } from '../validations';
import { member_selector } from '../selectors';
import { IMembersResponse } from '../models';

export const GetRoutes = new Hono()
  // Get team members
  .get('/members', zValidator('query', member_query_schema), requireRoleMiddleware(['admin']), async (c) => {
    try {
      const user = c.get('user');

      const { page, take, profession, query } = c.req.valid('query');

      const whereConditions: Prisma.UserWhereInput = {
        id: { not: user.id },
        ...(profession && { professions: { some: { name: profession } } }),
        ...(query && { OR: [{ email: { search: query } }, { username: { search: query } }] }),
      };

      const [members, members_count] = await Promise.all([
        db.user.findMany({
          where: whereConditions,
          orderBy: { created_at: 'desc' },
          skip: (page - 1) * take,
          take: take + 1,
          select: member_selector,
        }),
        db.user.count({ where: whereConditions }),
      ]);

      const hasMore = members.length > take;

      const response: IMembersResponse = {
        hasMore,
        page_count: Math.ceil(members_count / take),
        members: hasMore ? members.slice(0, take) : members,
      };

      return c.json(response, { status: 200 });
    } catch (error) {
      return c.json(`${errors.server_error}. ${getErrorMessage(error)}`, { status: 500 });
    }
  });
