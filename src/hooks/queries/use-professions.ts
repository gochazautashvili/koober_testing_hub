import { useQuery } from '@tanstack/react-query';

import { errors } from '@/constants';
import { client } from '@/library';

const getData = async () => {
  const res = await client.api.global.professions.$get();

  if (!res.ok) throw new Error(errors.server_error);

  return res.json();
};

export const professionsQueryKey = ['professions'];

export const useProfessions = () => {
  return useQuery({
    queryKey: professionsQueryKey,
    queryFn: getData,
  });
};
