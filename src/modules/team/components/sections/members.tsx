'use client';
import { useView } from '@/hooks/helpers/use-view';

import { GridView } from './grid-view';
import { ListView } from './list-view';

export const Members = () => {
  const { view } = useView();

  if (view === 'grid') return <GridView />;

  return <ListView />;
};
