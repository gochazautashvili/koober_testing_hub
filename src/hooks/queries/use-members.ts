'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { IMembersResponse } from '@/app/api/members/services/types';

const getData = async () => {
  const res = await axios.get<IMembersResponse>('/api/members');

  return res.data;
};

export const membersQueryKey = () => {
  return ['organization-members'];
};

export const useMembers = () => {
  return useQuery({
    queryKey: membersQueryKey(),
    queryFn: getData,
  });
};
