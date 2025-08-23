import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const MembersGridViewSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="group transition-all duration-200">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="border-background absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2">
                    <Skeleton className="h-full w-full rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>

              <Skeleton className="h-8 w-8 rounded-md" />
            </div>

            <div className="mt-2 flex gap-2">
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-20 rounded-full" />
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Skeleton className="h-3 w-3" />
                <Skeleton className="h-4 w-40" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-3 w-3" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-8" />
              </div>
              <Skeleton className="h-2 w-full rounded-full" />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <Skeleton className="mx-auto h-6 w-8" />
                <Skeleton className="mx-auto h-3 w-12" />
              </div>
              <div className="space-y-1">
                <Skeleton className="mx-auto h-6 w-8" />
                <Skeleton className="mx-auto h-3 w-8" />
              </div>
              <div className="space-y-1">
                <Skeleton className="mx-auto h-6 w-8" />
                <Skeleton className="mx-auto h-3 w-8" />
              </div>
            </div>

            <div className="flex items-center justify-between border-t pt-2 text-xs">
              <Skeleton className="h-3 w-24" />
              <div className="flex items-center gap-1">
                <Skeleton className="h-3 w-3" />
                <Skeleton className="h-3 w-12" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
