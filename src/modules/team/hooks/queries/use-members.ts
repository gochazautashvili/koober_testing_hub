'use client';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { member_query_schema } from '@/app/api/team/members/services/validations';
import { IMembersResponse } from '@/app/api/team/members/services/models';
import { getSearchParams } from '@/helpers/search';
import { useView } from '@/hooks/helpers/use-view';

import { MEMBERS_GRID_VIEW_TAKE, MEMBERS_LIST_VIEW_TAKE } from '../../constants/queries';

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

export const useMembersQueryParams = () => {
  const { view } = useView();

  const defaultTake = view === 'grid' ? MEMBERS_GRID_VIEW_TAKE : MEMBERS_LIST_VIEW_TAKE;

  const searchParams = useSearchParams();

  const params = getSearchParams(searchParams);

  return { ...params, take: params?.take || defaultTake.toString() };
};

export const useMembers = () => {
  const search = useMembersQueryParams();

  return useQuery({
    queryKey: membersQueryKey(search),
    queryFn: () => getData(search),
  });
};
