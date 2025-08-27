import { member_role } from '@/generated/prisma/prisma';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

import { MemberListSkeleton } from '../skeletons/members-list-skeleton';
import { ErrorAlert } from '@/components/errors/error-alert';

import { useMembersForProject } from '../../hooks/queries/use-members-for-project';
import { cn, getFullProfession, getInitials } from '@/library/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ITeamMembersProps {
  values: { id: string; role: member_role }[];
  onSelect: (e: { id: string; role: member_role }[]) => void;
}

export const TeamMembers = ({ values, onSelect }: ITeamMembersProps) => {
  const { status, data, error, refetch } = useMembersForProject();

  if (status === 'pending') return <MemberListSkeleton />;

  if (status === 'error') return <ErrorAlert error={error} onRetry={refetch} />;

  const selectedIds = values.map((e) => e.id);

  const sortedData = [...data].sort((a, b) => {
    const aChecked = selectedIds.includes(a.id);
    const bChecked = selectedIds.includes(b.id);

    if (aChecked && !bChecked) return -1;
    if (!aChecked && bChecked) return 1;

    return 0;
  });

  const roles: member_role[] = ['lead', 'member', 'viewer'];

  return (
    <div className="flex flex-col gap-1">
      {sortedData.map((member) => (
        <Label
          htmlFor={member.id}
          className={cn(
            'hover:bg-accent/30 flex cursor-pointer items-center justify-between gap-2 rounded-md p-2 pr-4',
            selectedIds.includes(member.id) && 'bg-primary/30 hover:bg-primary/10',
          )}
          key={member.id}
        >
          <div className="flex flex-1 items-center space-x-3">
            <Checkbox
              id={member.id}
              checked={selectedIds.includes(member.id)}
              onCheckedChange={() => {
                if (selectedIds.includes(member.id)) {
                  onSelect(values.filter((e) => e.id !== member.id));
                } else {
                  onSelect([...values, { id: member.id, role: 'member' }]);
                }
              }}
            />
            <Avatar className="h-8 w-8">
              <AvatarImage src={member.avatar || ''} />
              <AvatarFallback>{getInitials(member.username)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="text-sm font-medium">{member.username}</div>
              <div className="text-muted-foreground text-xs">
                {getFullProfession(member.professions.map((e) => e.name))}
              </div>
            </div>
          </div>

          {selectedIds.includes(member.id) && (
            <Select
              onValueChange={(role: member_role) =>
                onSelect(values.map((e) => (e.id === member.id ? { ...e, role } : e)))
              }
              defaultValue={member_role.member}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="member role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role, i) => {
                  return (
                    <SelectItem key={i} value={role}>
                      {role}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          )}
        </Label>
      ))}
    </div>
  );
};
