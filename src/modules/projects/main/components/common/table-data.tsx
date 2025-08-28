import { formatDate } from 'date-fns';
import { Fragment } from 'react';

import { TableCell, TableRow } from '@/components/ui/table';

import { DataNotFoundCard, ErrorAlert } from '@/components/errors';
import { Pagination, MemberAvatarCard } from '@/components/common';
import { ActionsButton } from '../common';

import { useProjects } from '../../hooks/queries/use-projects';

import { PROJECTS_GRID_VIEW_TAKE, PROJECTS_GRID_VIEW_TAKE_DATA_PER_PAGE } from '../../constants';
import { ProjectTableSkeleton } from '../skeletons';

function getStatusDotColor(status: string) {
  switch (status) {
    case 'Active':
      return 'bg-green-500';
    case 'Completed':
      return 'bg-blue-500';
    case 'Archived':
      return 'bg-gray-400';
    default:
      return 'bg-gray-400';
  }
}

const colSpan = 5;

export const TableData = () => {
  const { data, status, error, refetch } = useProjects();

  if (status === 'pending') return <ProjectTableSkeleton />;

  if (status === 'error') {
    return (
      <TableRow>
        <TableCell colSpan={colSpan}>
          <ErrorAlert error={error} onRetry={refetch} />;
        </TableCell>
      </TableRow>
    );
  }

  if (data.projects.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={colSpan}>
          <DataNotFoundCard onRefresh={refetch} />;
        </TableCell>
      </TableRow>
    );
  }

  return (
    <Fragment>
      {data.projects.map((project) => (
        <TableRow key={project.id} className="hover:bg-muted/50">
          <TableCell>
            <div className="flex items-center gap-3">
              <div className={`h-2 w-2 rounded-full ${getStatusDotColor(project.status)}`} />
              <div>
                <div className="font-medium">{project.name}</div>
                <div className="text-muted-foreground line-clamp-1 text-sm">{project.description}</div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <MemberAvatarCard className="size-6" members={project.members.map((e) => e.user)} />
          </TableCell>
          <TableCell>
            <div className="text-sm">
              <span className="font-medium">{project._count.tasks}</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="text-muted-foreground text-sm">{formatDate(project.updated_at, 'dd MMM yyyy')}</div>
          </TableCell>
          <TableCell>
            <ActionsButton />
          </TableCell>
        </TableRow>
      ))}

      {data.page_count > 1 && (
        <TableRow>
          <TableCell colSpan={colSpan}>
            <Pagination
              className="p-1"
              hasMore={data.hasMore}
              page_count={data.page_count}
              default_take={PROJECTS_GRID_VIEW_TAKE}
              per_page_counts={PROJECTS_GRID_VIEW_TAKE_DATA_PER_PAGE}
            />
          </TableCell>
        </TableRow>
      )}
    </Fragment>
  );
};
