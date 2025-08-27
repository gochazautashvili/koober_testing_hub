'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { membersQueryKey } from '../queries/use-members';
import { invite_member } from '../../services/actions';

import { MEMBERS_GRID_VIEW_TAKE, MEMBERS_LIST_VIEW_TAKE } from '../../constants/queries';
import { usePaginatedQueryParams } from '@/hooks/helpers/use-paginated-query-params';

export const useInviteMember = () => {
  const queryParams = usePaginatedQueryParams({
    GRID_TAKE: MEMBERS_GRID_VIEW_TAKE,
    LIST_TAKE: MEMBERS_LIST_VIEW_TAKE,
  });

  const queryKey = membersQueryKey(queryParams);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: invite_member,
    onSuccess: async ({ message }) => {
      await queryClient.cancelQueries({ queryKey });

      await queryClient.invalidateQueries({ queryKey });

      toast.success(message);
    },
    onError: (error) => toast.error(error.message),
  });
};
