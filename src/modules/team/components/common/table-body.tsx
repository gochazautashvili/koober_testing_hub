'use client';
import { formatDate } from 'date-fns';
import { Fragment } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

import MembersTableSkeleton from '../skeletons/list-view-skeleton';
import { ErrorAlert } from '@/components/errors/error-alert';
import { Pagination } from '@/components/common/pagination';
import { ActionsButton } from './actions-button';

import { MEMBERS_LIST_VIEW_TAKE, MEMBERS_LIST_VIEW_TAKE_DATA_PER_PAGE } from '../../constants/queries';
import { getInitials } from '@/library/utils';

import { useMembers } from '../../hooks/queries/use-members';
import DataNotFoundCard from '@/components/errors/data-notfound';

export const TableData = () => {
  const { data, status, error, refetch } = useMembers();

  if (status === 'pending') return <MembersTableSkeleton />;

  if (status === 'error') {
    return (
      <TableRow>
        <TableCell colSpan={8}>
          <ErrorAlert error={error} onRetry={refetch} />
        </TableCell>
      </TableRow>
    );
  }

  if (data.members.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={8}>
          <DataNotFoundCard onRefresh={refetch} />;
        </TableCell>
      </TableRow>
    );
  }

  const isOnline = true;

  return (
    <Fragment>
      {data.members.map((member) => (
        <TableRow key={member.id} className="hover:bg-muted/50">
          <TableCell>
            <div className="relative">
              <Avatar className="h-8 w-8">
                <AvatarImage src={member.avatar || '/placeholder.svg'} />
                <AvatarFallback className="text-xs">{getInitials(member.username)}</AvatarFallback>
              </Avatar>
              <div
                className={`border-background absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border ${
                  isOnline ? 'bg-green-500' : 'bg-gray-400'
                }`}
              />
            </div>
          </TableCell>

          <TableCell>
            <div>
              <div className="font-medium">{member.username}</div>
              <div className="text-muted-foreground line-clamp-1 text-xs">
                {member.professions.map((e) => e.name).join(', ')}
              </div>
            </div>
          </TableCell>

          <TableCell className="text-muted-foreground">{member.email}</TableCell>

          <TableCell>
            <Badge className="text-sm">{member.role}</Badge>
          </TableCell>

          <TableCell className="text-center">
            <span className="font-medium">{member._count.project_memberships}</span>
          </TableCell>

          <TableCell className="text-center">
            <div className="text-sm">
              <span className="font-medium">{member._count.tasks_assigned}</span>
            </div>
          </TableCell>

          <TableCell className="text-muted-foreground text-sm">
            {member.last_login ? formatDate(member.last_login, 'YYYY, MM, dd') : 'ჯერ არ შემოსულა'}
          </TableCell>

          <TableCell className="text-right">
            <ActionsButton username={member.username} memberId={member.id} email={member.email} role={member.role} />
          </TableCell>
        </TableRow>
      ))}

      {data.page_count > 1 && (
        <TableRow>
          <TableCell colSpan={8}>
            <Pagination
              className="p-1"
              hasMore={data.hasMore}
              page_count={data.page_count}
              default_take={MEMBERS_LIST_VIEW_TAKE}
              per_page_counts={MEMBERS_LIST_VIEW_TAKE_DATA_PER_PAGE}
            />
          </TableCell>
        </TableRow>
      )}
    </Fragment>
  );
};
