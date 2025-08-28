import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { usePaginatedQueryParams } from '@/hooks/helpers/use-paginated-query-params';
import { create_project } from '../../services/actions';

import { PROJECTS_GRID_VIEW_TAKE, PROJECTS_LIST_VIEW_TAKE } from '../../constants';
import { projectsQueryKey } from '../queries/use-projects';

export const useCreateProject = () => {
  const queryParams = usePaginatedQueryParams({
    GRID_TAKE: PROJECTS_GRID_VIEW_TAKE,
    LIST_TAKE: PROJECTS_LIST_VIEW_TAKE,
  });

  const queryKey = projectsQueryKey(queryParams);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: create_project,
    onSuccess: async ({ message }) => {
      await queryClient.cancelQueries({ queryKey });

      await queryClient.invalidateQueries({ queryKey });

      toast.success(message);
    },
    onError: (error) => toast.error(error.message),
  });
};
