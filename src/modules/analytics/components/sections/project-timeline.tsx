import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projectTimelineData = [
  { project: 'E-commerce', start: 0, duration: 12, progress: 75, status: 'active' },
  { project: 'Mobile App', start: 2, duration: 8, progress: 45, status: 'active' },
  { project: 'API Integration', start: 4, duration: 6, progress: 90, status: 'active' },
  { project: 'User Dashboard', start: 6, duration: 10, progress: 30, status: 'active' },
  { project: 'Security Audit', start: 8, duration: 4, progress: 100, status: 'completed' },
];

export const ProjectTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Timeline</CardTitle>
        <CardDescription>Gantt-style view of project schedules and progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-muted-foreground flex items-center justify-between text-sm">
            <span>Project</span>
            <span>Timeline (Weeks)</span>
          </div>
          {projectTimelineData.map((project) => (
            <div key={project.project} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{project.project}</span>
                <Badge variant={project.status === 'completed' ? 'default' : 'secondary'}>
                  {project.progress}% Complete
                </Badge>
              </div>
              <div className="bg-muted relative h-6 rounded">
                <div
                  className="absolute h-full rounded bg-blue-500"
                  style={{
                    left: `${(project.start / 16) * 100}%`,
                    width: `${(project.duration / 16) * 100}%`,
                    opacity: 0.7,
                  }}
                />
                <div
                  className="absolute h-full rounded bg-blue-600"
                  style={{
                    left: `${(project.start / 16) * 100}%`,
                    width: `${((project.duration * project.progress) / 100 / 16) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
