import { parseAsString, useQueryStates } from 'nuqs';

export const useTeamMemberFilters = () => {
  const [search, setSearch] = useQueryStates({
    query: parseAsString.withDefault(''),
    profession: parseAsString.withDefault('all'),
  });

  return { search, setSearch };
};
