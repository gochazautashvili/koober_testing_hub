import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ProjectCardSkeleton = () => (
  <Card className="cursor-pointer transition-all duration-200">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-1">
          {/* Project name */}
          <Skeleton className="h-6 w-3/4" />
          {/* Project description */}
          <div className="space-y-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
        {/* Actions button */}
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
      {/* Status badge */}
      <Skeleton className="h-6 w-20 rounded-full" />
    </CardHeader>

    <CardContent className="space-y-4">
      {/* Team section */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-12" />
        <div className="flex -space-x-2">
          {/* Team avatars */}
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="border-background h-8 w-8 rounded-full border-2" />
          ))}
          {/* Extra members indicator */}
          <Skeleton className="border-background h-8 w-8 rounded-full border-2" />
        </div>
      </div>

      {/* Badges section */}
      <div className="flex gap-2">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>

      {/* Updated date */}
      <div className="flex items-center justify-between border-t pt-2">
        <Skeleton className="h-3 w-24" />
      </div>
    </CardContent>
  </Card>
);

export const ProjectsSkeleton = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 6 }, (_, i) => (
      <ProjectCardSkeleton key={i} />
    ))}
  </div>
);
