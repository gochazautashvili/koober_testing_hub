import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';

import { Prisma } from '@/generated/prisma/prisma';

import { requireRoleMiddleware } from '@/auth';
import { getErrorMessage } from '@/helpers';
import { errors } from '@/constants';
import { db } from '@/library';

import { project_query_schema } from '../validations';
import { project_selector } from '../selectors';
import { IProjectsResponse } from '../models';

export const GetRoutes = new Hono()
  // Get projects
  .get('/filter', zValidator('query', project_query_schema), requireRoleMiddleware(['admin']), async (c) => {
    try {
      const user = c.get('user');

      const { page, take, query, status, member } = c.req.valid('query');

      const whereConditions: Prisma.ProjectWhereInput = {
        id: { not: user.id },
        ...(status && { status }),
        ...(member && { members: { some: { user: { email: member } } } }),
        ...(user.role === 'developer' && { members: { some: { id: user.id } } }),
        ...(query && {
          OR: [{ name: { search: query } }, { description: { search: query } }],
        }),
      };

      const [projects, projects_count] = await Promise.all([
        db.project.findMany({
          where: whereConditions,
          orderBy: { created_at: 'desc' },
          skip: (page - 1) * take,
          take: take + 1,
          select: project_selector,
        }),
        db.project.count({ where: whereConditions }),
      ]);

      const hasMore = projects.length > take;

      const response: IProjectsResponse = {
        hasMore,
        page_count: Math.ceil(projects_count / take),
        projects: hasMore ? projects.slice(0, take) : projects,
      };

      return c.json(response, { status: 200 });
    } catch (error) {
      return c.json(`${errors.server_error}. ${getErrorMessage(error)}`, { status: 500 });
    }
  });
