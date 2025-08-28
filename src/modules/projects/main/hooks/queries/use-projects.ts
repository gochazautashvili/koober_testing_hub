'use client';
import { useQuery } from '@tanstack/react-query';

import { project_query_schema } from '@/modules/projects/main/server/validations/get.validations';
import { usePaginatedQueryParams } from '@/hooks/helpers/use-paginated-query-params';
import { PROJECTS_GRID_VIEW_TAKE, PROJECTS_LIST_VIEW_TAKE } from '../../constants';

import { errors } from '@/constants';
import { client } from '@/library';

const getData = async (query: Record<string, string>) => {
  const res = await client.api.projects.filter.$get({ query });

  if (!res.ok) throw new Error(errors.server_error);

  return res.json();
};

export const projectsQueryKey = (params: Record<string, string>) => {
  const key = 'projects';

  const { data, error } = project_query_schema.safeParse(params);

  if (error) return [key];

  return [key, ...Object.entries(data).map((e) => e[1])];
};

export const useProjects = () => {
  const queryParams = usePaginatedQueryParams({
    GRID_TAKE: PROJECTS_GRID_VIEW_TAKE,
    LIST_TAKE: PROJECTS_LIST_VIEW_TAKE,
  });

  return useQuery({
    queryKey: projectsQueryKey(queryParams),
    queryFn: () => getData(queryParams),
  });
};
