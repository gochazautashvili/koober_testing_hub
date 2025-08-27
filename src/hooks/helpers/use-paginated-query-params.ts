import { useSearchParams } from 'next/navigation';

import { getSearchParams } from '@/helpers/search';
import { useView } from './use-view';

export const usePaginatedQueryParams = ({ GRID_TAKE, LIST_TAKE }: { GRID_TAKE: number; LIST_TAKE: number }) => {
  const { view } = useView();

  const defaultTake = view === 'grid' ? GRID_TAKE : LIST_TAKE;

  const searchParams = useSearchParams();

  const params = getSearchParams(searchParams);

  return { ...params, take: params?.take || defaultTake.toString() };
};
