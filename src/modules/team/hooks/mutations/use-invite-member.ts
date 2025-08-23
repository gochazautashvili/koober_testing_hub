'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

import { membersQueryKey } from '../queries/use-members';
import { invite_member } from '../../services/actions';
import { getSearchParams } from '@/helpers/search';

export const useInviteMember = () => {
  const searchParams = useSearchParams();

  const queryKey = membersQueryKey(getSearchParams(searchParams));
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
