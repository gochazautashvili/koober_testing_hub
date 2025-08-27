'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { member_query_schema } from '@/app/api/team/members/services/validations';
import { IMembersResponse } from '@/app/api/team/members/services/models';

import { MEMBERS_GRID_VIEW_TAKE, MEMBERS_LIST_VIEW_TAKE } from '../../constants/queries';
import { usePaginatedQueryParams } from '@/hooks/helpers/use-paginated-query-params';

const getData = async (params: Record<string, string>) => {
  const res = await axios.get<IMembersResponse>('/api/team/members', { params });

  return res.data;
};

export const membersQueryKey = (params: Record<string, string>) => {
  const key = 'team-members';

  const { data, error } = member_query_schema.safeParse(params);

  if (error) return [key];

  return [key, ...Object.entries(data).map((e) => e[1])];
};

export const useMembers = () => {
  const queryParams = usePaginatedQueryParams({
    GRID_TAKE: MEMBERS_GRID_VIEW_TAKE,
    LIST_TAKE: MEMBERS_LIST_VIEW_TAKE,
  });

  return useQuery({
    queryKey: membersQueryKey(queryParams),
    queryFn: () => getData(queryParams),
  });
};
