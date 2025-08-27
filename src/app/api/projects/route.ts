import { NextRequest } from 'next/server';

import { getErrorMessage } from '@/helpers/errors';
import { getSearchParams } from '@/helpers/search';

import { Prisma } from '@/generated/prisma/prisma';
import { requireAuth } from '@/auth/helpers';
import { errors } from '@/constants/errors';
import { db } from '@/library/database';

import { project_query_schema } from './services/validations';
import { project_selector } from './services/selectors';
import { IProjectsResponse } from './services/models';

export async function GET(req: NextRequest) {
  try {
    const { user } = await requireAuth();

    const searchParams = getSearchParams(req.nextUrl.searchParams);

    const { data, error } = project_query_schema.safeParse(searchParams);

    if (error) return new Response(error.message, { status: 400 });

    const { page, take, query, status } = data;

    const whereConditions: Prisma.ProjectWhereInput = {
      id: { not: user.id },
      ...(status && { status }),
      ...(user.role === 'developer' && { members: { some: { id: user.id } } }),
      ...(query && {
        OR: [{ name: { contains: query } }, { description: { contains: query } }],
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

    return Response.json(response, { status: 200 });
  } catch (error) {
    return new Response(`${errors.server_error}. ${getErrorMessage(error)}`, {
      status: 500,
    });
  }
}
