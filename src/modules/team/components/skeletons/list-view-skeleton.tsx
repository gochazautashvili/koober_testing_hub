import { Fragment } from 'react';

import { TableCell, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

interface MembersTableSkeletonProps {
  rowCount?: number;
}

const MembersTableSkeleton = ({ rowCount = 5 }: MembersTableSkeletonProps) => {
  return (
    <Fragment>
      {Array.from({ length: rowCount }).map((_, index) => (
        <TableRow key={index} className="hover:bg-muted/50">
          {/* Avatar Column */}
          <TableCell>
            <div className="relative">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full" />
            </div>
          </TableCell>

          {/* Name & Department Column */}
          <TableCell>
            <div className="space-y-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-20" />
            </div>
          </TableCell>

          {/* Email Column */}
          <TableCell>
            <Skeleton className="h-4 w-32" />
          </TableCell>

          {/* Role & Status Badges Column */}
          <TableCell>
            <Skeleton className="h-5 w-16 rounded-full" />
          </TableCell>

          {/* Projects Active Column */}
          <TableCell className="text-center">
            <Skeleton className="mx-auto h-4 w-6" />
          </TableCell>

          {/* Tasks Completed/Assigned Column */}
          <TableCell className="text-center">
            <Skeleton className="mx-auto h-4 w-12" />
          </TableCell>

          {/* Last Active Column */}
          <TableCell>
            <Skeleton className="h-4 w-20" />
          </TableCell>

          {/* Actions Column */}
          <TableCell className="text-right">
            <Skeleton className="ml-auto h-8 w-8 rounded" />
          </TableCell>
        </TableRow>
      ))}
    </Fragment>
  );
};

export default MembersTableSkeleton;
