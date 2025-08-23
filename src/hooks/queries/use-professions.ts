import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { IProfessionResponse } from '@/app/api/professions/services/models';

const getData = async () => {
  const res = await axios.get<IProfessionResponse[]>('/api/professions');

  return res.data;
};

export const professionsQueryKey = ['professions'];

export const useProfessions = () => {
  return useQuery({
    queryKey: professionsQueryKey,
    queryFn: getData,
  });
};
