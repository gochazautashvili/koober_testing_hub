'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { IMembersForProjectResponse } from '@/app/api/team/members/for-projects/services/types';

const getData = async () => {
  const res = await axios.get<IMembersForProjectResponse>('/api/team/members/for-projects');

  return res.data;
};

export const membersForProjectQueryKey = () => {
  return ['team-members', 'for-project'];
};

export const useMembersForProject = () => {
  return useQuery({
    queryKey: membersForProjectQueryKey(),
    queryFn: getData,
  });
};
