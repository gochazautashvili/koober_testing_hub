import { parseAsInteger, useQueryState } from 'nuqs';

export const usePagination = (defaultTake?: number) => {
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));
  const [take, setTake] = useQueryState('take', parseAsInteger.withDefault(defaultTake || 10));

  return { page, setPage, take, setTake };
};
