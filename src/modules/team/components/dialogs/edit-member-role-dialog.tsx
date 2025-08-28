'use client';
import { useState } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogDescription,
} from '@/components/ui/dialog';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { LoadingButton } from '@/components/common/loading-button';

import { useEditMemberRole } from '../../hooks/mutations/use-edit-user-role';
import { role_options, role_values } from '@/constants/roles';
import { user_role } from '@/generated/prisma/prisma';

interface IProps {
  email: string;
  role: user_role;
  memberId: string;
  username: string;
  onOpenChange: (open: boolean) => void;
}

export const EditMemberRoleDialog = ({ memberId, role, username, email, onOpenChange }: IProps) => {
  const [selectedRole, setSelectedRole] = useState<user_role>(role);
  const { mutate, isPending } = useEditMemberRole();

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>წევრის როლის რედაქტირება</DialogTitle>
          <DialogDescription>შეცვალეთ {username}-ის როლი სისტემაში</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="member-info" className="text-sm font-medium">
              წევრის ინფორმაცია
            </Label>
            <div className="text-muted-foreground text-sm">
              <p>
                <strong>სახელი:</strong> {username}
              </p>
              <p>
                <strong>ელ.ფოსტა:</strong> {email}
              </p>
              <p>
                <strong>მიმდინარე როლი:</strong> {role_values[role]}
              </p>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="role-select" className="text-sm font-medium">
              ახალი როლი
            </Label>
            <Select value={selectedRole} onValueChange={(value: user_role) => setSelectedRole(value)}>
              <SelectTrigger className="w-full" id="role-select">
                <SelectValue placeholder="აირჩიეთ როლი" />
              </SelectTrigger>
              <SelectContent>
                {role_options.map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isPending}>
            გაუქმება
          </Button>
          <LoadingButton
            isLoading={isPending}
            disabled={selectedRole === role}
            onClick={() => mutate({ role: selectedRole, userId: memberId }, { onSuccess: () => onOpenChange(false) })}
          >
            შენახვა
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
