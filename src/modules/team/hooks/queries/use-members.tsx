'use client';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { member_query_schema } from '@/app/api/team/members/services/validations';
import { IMembersResponse } from '@/app/api/team/members/services/models';
import { getSearchParams } from '@/helpers/search';

const getData = async (params: Record<string, string>) => {
  const res = await axios.get<IMembersResponse>('/api/team/members', { params });

  return res.data;
};

export const membersQueryKey = (params: Record<string, string>) => {
  const search = member_query_schema.safeParse(params);

  return ['team-members', ...Object.entries(search).map((e) => e[1])];
};

export const useMembers = () => {
  const searchParams = useSearchParams();

  const params = getSearchParams(searchParams);

  return useQuery({
    queryKey: membersQueryKey(params),
    queryFn: () => getData(params),
  });
};
