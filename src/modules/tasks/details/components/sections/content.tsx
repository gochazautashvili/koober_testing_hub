import { Link } from 'lucide-react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { Description } from '../common/description';
import { Attachments } from '../common/attachments';
import { getStatusColor } from '@/helpers/utils';
import { SubTasks } from '../common/sub-tasks';
import { Activity } from '../common/activity';
import { DueDate } from '../common/due-date';
import { mockTask } from '../../constants';
import { Labels } from '../common/labels';

export const Content = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex h-full">
        <div className="flex-1 space-y-6 overflow-auto p-6">
          <Description />
          <Attachments />
          <SubTasks />
          <Activity />
        </div>

        {/* Right Sidebar */}
        <div className="bg-muted/30 w-80 space-y-6 overflow-auto border-l p-6">
          {/* Assignee */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Assignee</label>
            <Select defaultValue={mockTask.assignee.id}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={mockTask.assignee.id}>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={mockTask.assignee.avatar || '/placeholder.svg'} />
                      <AvatarFallback className="text-xs">{mockTask.assignee.initials}</AvatarFallback>
                    </Avatar>
                    {mockTask.assignee.name}
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Project */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Project</label>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Link className="mr-2 h-4 w-4" />
              {mockTask.project.name}
            </Button>
          </div>

          {/* Due Date */}
          <DueDate />

          {/* Time Tracking */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Time Tracking</label>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Logged:</span>
                <span>{mockTask.loggedHours}h</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Estimated:</span>
                <span>{mockTask.estimatedHours}h</span>
              </div>
              <div className="bg-muted h-2 w-full rounded-full">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(mockTask.loggedHours / mockTask.estimatedHours) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Labels */}
          <Labels />

          {/* Related Tasks */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Related Tasks</label>
            <div className="space-y-2">
              {mockTask.relatedTasks.map((task) => (
                <div key={task.id} className="relative flex items-center justify-between rounded border p-2">
                  <div>
                    <p className="font-mono text-xs">{task.id}</p>
                    <p className="mt-3 truncate text-sm">{task.title}</p>
                  </div>

                  <Badge variant={getStatusColor(task.status)} className="absolute top-1 right-1 text-xs">
                    {task.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
