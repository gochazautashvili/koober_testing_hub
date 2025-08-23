import { parseAsString, useQueryState } from 'nuqs';

export const useView = () => {
  const [view, setView] = useQueryState('view', parseAsString.withDefault('grid'));

  return { view, setView };
};
