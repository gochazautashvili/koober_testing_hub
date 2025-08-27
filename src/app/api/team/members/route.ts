import { NextRequest } from 'next/server';

import { filter_member_status, member_query_schema } from './services/validations';
import { member_selector } from './services/selectors';
import { IMembersResponse } from './services/models';

import { Prisma } from '@/generated/prisma/prisma';
import { getSearchParams } from '@/helpers/search';
import { getErrorMessage } from '@/helpers/errors';
import { requireRole } from '@/auth/helpers';
import { errors } from '@/constants/errors';
import { db } from '@/library/database';

export async function GET(req: NextRequest) {
  try {
    const { user } = await requireRole(['admin']);

    const searchParams = getSearchParams(req.nextUrl.searchParams);

    const { data, error } = member_query_schema.safeParse(searchParams);

    if (error) return new Response(error.message, { status: 400 });

    const { page, take, profession, query, status } = data;

    const is_active = status === filter_member_status.ACTIVE ? true : false;

    const whereConditions: Prisma.UserWhereInput = {
      id: { not: user.id },
      ...(status !== filter_member_status.ALL && { is_active }),
      ...(profession && { professions: { some: { name: profession } } }),
      ...(query && {
        OR: [{ email: { search: query } }, { username: { search: query } }],
      }),
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

    return Response.json(response, { status: 200 });
  } catch (error) {
    return new Response(`${errors.server_error}. ${getErrorMessage(error)}`, {
      status: 500,
    });
  }
}
