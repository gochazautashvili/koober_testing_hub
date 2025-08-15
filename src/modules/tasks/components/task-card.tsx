import { CalendarIcon, GripVertical, MessageSquare, Paperclip } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { getSeverityColor, isOverdue } from '../utils';
import { Badge } from '@/components/ui/badge';
import { tasks } from '../constants';

export const TaskCard = ({ task }: { task: (typeof tasks)[0] }) => {
  return (
    <Card className="group mb-3 cursor-pointer transition-shadow hover:shadow-md">
      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <GripVertical className="h-4 w-4 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="text-muted-foreground font-mono text-xs">{task.id}</span>
          </div>
          <Badge className={`text-xs ${getSeverityColor(task.severity)}`}>{task.severity}</Badge>
        </div>

        <h4 className="mb-2 line-clamp-2 text-sm font-medium">{task.title}</h4>
        <p className="text-muted-foreground mb-3 line-clamp-2 text-xs">{task.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={task.assignee.avatar || '/placeholder.svg'} />
              <AvatarFallback className="text-xs">{task.assignee.initials}</AvatarFallback>
            </Avatar>
            <div className="text-muted-foreground flex items-center gap-1 text-xs">
              <CalendarIcon className="h-3 w-3" />
              <span className={isOverdue(task.dueDate) ? 'font-medium text-red-500' : ''}>{task.dueDate}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {task.attachments > 0 && (
              <div className="text-muted-foreground flex items-center gap-1 text-xs">
                <Paperclip className="h-3 w-3" />
                <span>{task.attachments}</span>
              </div>
            )}
            {task.comments > 0 && (
              <div className="text-muted-foreground flex items-center gap-1 text-xs">
                <MessageSquare className="h-3 w-3" />
                <span>{task.comments}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-3">
          <Badge variant="outline" className="text-xs">
            {task.project}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
