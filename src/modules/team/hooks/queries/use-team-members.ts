'use client';
import { useQuery } from '@tanstack/react-query';

import { TEAM_MEMBERS_GRID_VIEW_TAKE, TEAM_MEMBERS_LIST_VIEW_TAKE } from '../../constants';
import { usePaginatedQueryParams } from '@/hooks/helpers/use-paginated-query-params';
import { member_query_schema } from '../../server/validations/get.validations';

import { errors } from '@/constants';
import { client } from '@/library';

const getData = async (params: Record<string, string>) => {
  const res = await client.api.team.members.$get({ query: params });

  if (!res.ok) throw new Error(errors.server_error);

  return await res.json();
};

export const teamMembersQueryKey = (params: Record<string, string>) => {
  const key = 'team-members';

  const { data, error } = member_query_schema.safeParse(params);

  if (error) return [key];

  return [key, ...Object.entries(data).map((e) => e[1])];
};

export const useTeamMembers = () => {
  const queryParams = usePaginatedQueryParams({
    GRID_TAKE: TEAM_MEMBERS_GRID_VIEW_TAKE,
    LIST_TAKE: TEAM_MEMBERS_LIST_VIEW_TAKE,
  });

  return useQuery({
    queryKey: teamMembersQueryKey(queryParams),
    queryFn: () => getData(queryParams),
  });
};
