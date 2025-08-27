'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { PROJECTS_GRID_VIEW_TAKE, PROJECTS_LIST_VIEW_TAKE } from '../../constants/queries';
import { usePaginatedQueryParams } from '@/hooks/helpers/use-paginated-query-params';
import { project_query_schema } from '@/app/api/projects/services/validations';
import { IProjectsResponse } from '@/app/api/projects/services/models';

const getData = async (params: Record<string, string>) => {
  const res = await axios.get<IProjectsResponse>('/api/projects', { params });

  return res.data;
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
