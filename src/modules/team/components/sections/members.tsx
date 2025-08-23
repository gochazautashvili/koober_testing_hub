'use client';
import { useView } from '@/hooks/helpers/use-view';

import { GridView } from '../common/grid-view';
import { ListView } from '../common/list-view';

export const Members = () => {
  const { view } = useView();

  if (view === 'grid') return <GridView />;

  return <ListView />;
};
