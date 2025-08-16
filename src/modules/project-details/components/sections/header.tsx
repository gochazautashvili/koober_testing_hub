import { Archive, Calendar, Edit2, Share2 } from 'lucide-react';

import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { getStatusColor } from '@/helpers/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const project = {
  id: 1,
  name: 'project',
  status: 'In Progress',
  description: 'njbiuyhoidbslihfojfi',
  startDate: '2024-01-15',
  endDate: '2024-06-30',
  progress: 68,
  health: 'Good', // Good, At Risk, Critical
  totalTasks: 45,
  completedTasks: 31,
  teamSize: 8,
};

export const Header = () => {
  const isShow = false;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-4">
          {/* Project Name */}
          <div className="flex items-center gap-2">
            {isShow ? (
              <div className="flex items-center gap-2">
                <Input className="h-auto px-2 py-1 text-2xl font-bold" autoFocus />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Edit2 className="h-4 w-4" />
                </Button>
              </div>
            )}
            <Badge variant="secondary" className={getStatusColor(project.status)}>
              {project.status}
            </Badge>
          </div>

          {/* Description */}
          <div className="space-y-2">
            {isShow ? (
              <Textarea className="resize-none" autoFocus rows={3} />
            ) : (
              <p className="text-muted-foreground hover:bg-muted/50 cursor-pointer rounded-md p-2 transition-colors">
                {project.description}
              </p>
            )}
          </div>

          {/* Key Dates */}
          <div className="text-muted-foreground flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Start: {new Date(project.startDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>End: {new Date(project.endDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Edit2 className="h-4 w-4" />
            Edit
          </Button>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Archive className="h-4 w-4" />
            Archive
          </Button>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Project Progress</span>
          <span className="font-medium">{project.progress}%</span>
        </div>
        <Progress value={project.progress} className="h-2" />
      </div>
    </div>
  );
};
