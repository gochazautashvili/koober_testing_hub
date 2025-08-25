'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { membersQueryKey, useMembersQueryParams } from '../queries/use-members';
import { remove_member } from '../../services/actions';

export const useRemoveMember = () => {
  const queryParams = useMembersQueryParams();

  const queryKey = membersQueryKey(queryParams);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: remove_member,
    onSuccess: async ({ message }) => {
      await queryClient.cancelQueries({ queryKey });

      await queryClient.invalidateQueries({ queryKey });

      toast.success(message);
    },
    onError: (error) => toast.error(error.message),
  });
};
