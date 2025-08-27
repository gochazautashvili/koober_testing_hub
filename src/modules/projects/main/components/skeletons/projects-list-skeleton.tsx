import { TableRow, TableCell } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

import { Fragment } from 'react';

const ProjectTableRowSkeleton = () => (
  <TableRow className="hover:bg-muted/50">
    {/* Project name and description column */}
    <TableCell>
      <div className="flex items-center gap-3">
        {/* Status dot */}
        <Skeleton className="h-2 w-2 rounded-full" />
        <div className="flex-1 space-y-1">
          {/* Project name */}
          <Skeleton className="h-4 w-32" />
          {/* Project description */}
          <Skeleton className="h-3 w-48" />
        </div>
      </div>
    </TableCell>

    {/* Team members column */}
    <TableCell>
      <div className="flex -space-x-2">
        {/* Team avatars */}
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="border-background h-6 w-6 rounded-full border-2" />
        ))}
        {/* Extra members indicator */}
        <Skeleton className="border-background h-6 w-6 rounded-full border-2" />
      </div>
    </TableCell>

    {/* Tasks count column */}
    <TableCell>
      <Skeleton className="h-4 w-6" />
    </TableCell>

    {/* Updated date column */}
    <TableCell>
      <Skeleton className="h-4 w-20" />
    </TableCell>

    {/* Actions column */}
    <TableCell>
      <Skeleton className="h-8 w-8 rounded" />
    </TableCell>
  </TableRow>
);

export const ProjectTableSkeleton = () => (
  <Fragment>
    {Array.from({ length: 5 }, (_, i) => (
      <ProjectTableRowSkeleton key={i} />
    ))}
  </Fragment>
);
