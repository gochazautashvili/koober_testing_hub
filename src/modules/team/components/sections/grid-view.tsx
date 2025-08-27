import { Mail, Activity, User } from 'lucide-react';
import { formatDate } from 'date-fns';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import { MembersGridViewSkeleton } from '../skeletons/grid-view-skeleton';
import DataNotFoundCard from '@/components/errors/data-notfound';
import { ErrorAlert } from '@/components/errors/error-alert';

import { Pagination } from '@/components/common/pagination';
import { ActionsButton } from '../common/actions-button';

import { MEMBERS_GRID_VIEW_TAKE, MEMBERS_GRID_VIEW_TAKE_DATA_PER_PAGE } from '../../constants/queries';
import { getInitials } from '@/library/utils';

import { useMembers } from '../../hooks/queries/use-members';

export const GridView = () => {
  const { data, status, error, refetch } = useMembers();

  if (status === 'pending') return <MembersGridViewSkeleton />;

  if (status === 'error') return <ErrorAlert error={error} onRetry={refetch} />;

  if (!data || data.members.length === 0) return <DataNotFoundCard onRefresh={refetch} />;

  const isOnline = true;

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {data.members.map((member) => (
          <Card key={member.id} className="group transition-all duration-200 hover:shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar || '/placeholder.svg'} />
                      <AvatarFallback>{getInitials(member.username)}</AvatarFallback>
                    </Avatar>
                    <div
                      className={`border-background absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 ${
                        isOnline ? 'bg-green-500' : 'bg-gray-400'
                      }`}
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{member.username}</CardTitle>
                    <CardDescription className="text-sm">{member.role}</CardDescription>
                  </div>
                </div>

                <ActionsButton
                  username={member.username}
                  memberId={member.id}
                  email={member.email}
                  role={member.role}
                />
              </div>

              <div className="mt-2 flex gap-2">
                <Badge variant={member.is_active ? 'default' : 'destructive'}>
                  {member.is_active ? 'Active' : 'Inactive'}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="text-muted-foreground flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <User className="h-3 w-3" />
                  <span className="line-clamp-1">
                    {member.professions.length > 0
                      ? member.professions.map((e) => e.name).join(', ')
                      : 'პროფესია არ აქვს. (თავის პონტშია 🤣)'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-primary/40 space-y-1 rounded-md p-1">
                  <div className="text-lg font-semibold">{member._count.project_memberships}</div>
                  <p className="text-muted-foreground text-xs">Projects</p>
                </div>

                <div className="bg-primary/40 space-y-1 rounded-md p-1">
                  <div className="text-lg font-semibold">{member._count.tasks_assigned}</div>
                  <p className="text-muted-foreground text-xs">Tasks</p>
                </div>
              </div>

              <div className="text-muted-foreground flex items-center justify-between border-t pt-2 text-xs">
                <span>
                  Last active:{' '}
                  {member.last_login
                    ? formatDate(member.last_login, 'YYYY, MM, dd')
                    : 'ჯერ არ შემოსულა. (სახში მივადგეთ 🤣)'}
                </span>

                <div className="flex items-center gap-1">
                  <Activity className="h-3 w-3" />
                  <span>{isOnline ? 'Online' : 'Offline'}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Pagination
        className="mb-16"
        hasMore={data.hasMore}
        page_count={data.page_count}
        default_take={MEMBERS_GRID_VIEW_TAKE}
        per_page_counts={MEMBERS_GRID_VIEW_TAKE_DATA_PER_PAGE}
      />
    </div>
  );
};
