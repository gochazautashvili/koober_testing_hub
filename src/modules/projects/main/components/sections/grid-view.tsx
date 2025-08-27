import { formatDate } from 'date-fns';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { DataNotFoundCard, ErrorAlert } from '@/components/errors';
import { MemberAvatarCard, Pagination } from '@/components/common';
import { ActionsButton } from '../common';

import { useProjects } from '../../hooks/queries/use-projects';

import { PROJECTS_GRID_VIEW_TAKE, PROJECTS_GRID_VIEW_TAKE_DATA_PER_PAGE } from '../../constants/queries';

import { ProjectsSkeleton } from '../skeletons/projects-grid-skeleton';

function getStatusColor(status: string) {
  switch (status) {
    case 'Active':
      return 'default';
    case 'Completed':
      return 'secondary';
    case 'Archived':
      return 'outline';
    default:
      return 'secondary';
  }
}

export const GridView = () => {
  const { data, status, error, refetch } = useProjects();

  if (status === 'pending') return <ProjectsSkeleton />;

  if (status === 'error') return <ErrorAlert error={error} onRetry={refetch} />;

  if (data.projects.length === 0) return <DataNotFoundCard onRefresh={refetch} />;

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((project) => (
          <Card
            key={project.id}
            className="cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-1">
                  <CardTitle className="text-lg font-bold">{project.name}</CardTitle>
                  <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </div>
                <ActionsButton />
              </div>
              <Badge variant={getStatusColor(project.status)} className="w-fit">
                {project.status}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Team</span>
                </div>
                <MemberAvatarCard members={project.members.map((e) => e.user)} />
              </div>

              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs">
                  {project._count.tasks} open tasks
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {project._count.members} Members
                </Badge>
              </div>

              <div className="text-muted-foreground flex items-center justify-between border-t pt-2 text-xs">
                <span>Updated {formatDate(project.updated_at, 'dd MMM yyyy')}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Pagination
        className="my-10"
        hasMore={data.hasMore}
        page_count={data.page_count}
        default_take={PROJECTS_GRID_VIEW_TAKE}
        per_page_counts={PROJECTS_GRID_VIEW_TAKE_DATA_PER_PAGE}
      />
    </div>
  );
};
