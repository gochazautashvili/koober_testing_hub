import { Skeleton } from '@/components/ui/skeleton';

const MemberItemSkeleton = () => (
  <div className="hover:bg-accent/30 flex items-center space-x-3 rounded-md p-2">
    {/* Checkbox skeleton */}
    <Skeleton className="h-4 w-4 rounded-sm" />

    {/* Avatar skeleton */}
    <Skeleton className="h-8 w-8 rounded-full" />

    {/* Member info skeleton */}
    <div className="flex-1 space-y-1">
      {/* Username */}
      <Skeleton className="h-4 w-24" />
      {/* Profession */}
      <Skeleton className="h-3 w-32" />
    </div>
  </div>
);

export const MemberListSkeleton = ({ count = 5 }) => (
  <div>
    {Array.from({ length: count }, (_, i) => (
      <MemberItemSkeleton key={i} />
    ))}
  </div>
);
