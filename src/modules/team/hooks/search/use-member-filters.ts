import { parseAsString, useQueryStates } from 'nuqs';

import { filter_member_status } from '@/app/api/team/members/services/validations';

export const useMemberFilters = () => {
  const [search, setSearch] = useQueryStates({
    query: parseAsString.withDefault(''),
    profession: parseAsString.withDefault('all'),
    status: parseAsString.withDefault(filter_member_status.ALL),
  });

  return { search, setSearch };
};
