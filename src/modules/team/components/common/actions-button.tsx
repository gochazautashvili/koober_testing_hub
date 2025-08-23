'use client';
import { Edit, Trash2, UserCheck, MessageSquare, MoreHorizontal } from 'lucide-react';
import { Fragment, useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useRemoveMember } from '../../hooks/mutations/use-remove-member';
import { ConfirmAlertDialog } from '@/components/dialogs/confirm-alert-dialog';

export const ActionsButton = ({ memberId }: { memberId: string }) => {
  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useRemoveMember();

  return (
    <Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <UserCheck className="mr-2 h-4 w-4" />
            View Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            Edit Member
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MessageSquare className="mr-2 h-4 w-4" />
            Send Message
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)} className="text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Remove
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {open && (
        <ConfirmAlertDialog
          isLoading={isPending}
          onOpenChange={setOpen}
          onConfirm={() => mutate(memberId, { onSuccess: () => setOpen(false) })}
        />
      )}
    </Fragment>
  );
};
