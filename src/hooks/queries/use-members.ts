'use client';
import { useQuery } from '@tanstack/react-query';

import { errors } from '@/constants';
import { client } from '@/library';

const getData = async () => {
  const res = await client.api.global.members.$get();

  if (!res.ok) throw new Error(errors.server_error);

  return res.json();
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
