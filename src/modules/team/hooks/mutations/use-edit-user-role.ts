'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { membersQueryKey, useMembersQueryParams } from '../queries/use-members';
import { edit_user_role } from '../../services/actions';

export const useEditMemberRole = () => {
  const queryParams = useMembersQueryParams();

  const queryKey = membersQueryKey(queryParams);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: edit_user_role,
    onSuccess: async ({ message }) => {
      await queryClient.cancelQueries({ queryKey });

      await queryClient.invalidateQueries({ queryKey });

      toast.success(message);
    },
    onError: (error) => toast.error(error.message),
  });
};
