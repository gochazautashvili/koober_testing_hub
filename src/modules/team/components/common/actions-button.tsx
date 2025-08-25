'use client';
import { Edit, Trash2, UserCheck, MessageSquare, MoreHorizontal } from 'lucide-react';
import { Fragment, useState } from 'react';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

import { ConfirmAlertDialog } from '@/components/dialogs/confirm-alert-dialog';
import EditMemberRoleDialog from '../dialogs/edit-member-role-dialog';

import { useRemoveMember } from '../../hooks/mutations/use-remove-member';

import { user_role } from '@/generated/prisma/prisma';

interface IProps {
  memberId: string;
  username: string;
  role: user_role;
  email: string;
}

export const ActionsButton = ({ memberId, email, role, username }: IProps) => {
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);

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
          <DropdownMenuItem asChild>
            <Link href={`/dashboard/profile/${memberId}`}>
              <UserCheck className="mr-2 h-4 w-4" />
              View Profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setEditOpen(true)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Member
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href={`mailto:${email}`}>
              <MessageSquare className="mr-2 h-4 w-4" />
              Send Message
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setDeleteOpen(true)} className="text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Remove
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {isDeleteOpen && (
        <ConfirmAlertDialog
          isLoading={isPending}
          onOpenChange={setDeleteOpen}
          onConfirm={() => mutate(memberId, { onSuccess: () => setDeleteOpen(false) })}
        />
      )}

      {isEditOpen && (
        <EditMemberRoleDialog
          onOpenChange={setEditOpen}
          username={username}
          memberId={memberId}
          email={email}
          role={role}
        />
      )}
    </Fragment>
  );
};
