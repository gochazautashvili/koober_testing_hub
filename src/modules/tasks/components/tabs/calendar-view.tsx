import { CalendarIcon } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getPriorityIcon, isOverdue } from '@/helpers/utils';
import { Calendar } from '@/components/ui/calendar';
import { tasks } from '../../constants';

export const CalendarView = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Task Calendar</CardTitle>
            <CardDescription>View tasks by due date</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" className="rounded-md border" />
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {tasks
              .filter((task) => !task.completed)
              .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
              .slice(0, 5)
              .map((task) => (
                <div key={task.id} className="flex items-center gap-3 rounded-lg border p-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={task.assignee.avatar || '/placeholder.svg'} />
                    <AvatarFallback className="text-xs">{task.assignee.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{task.title}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <CalendarIcon className="h-3 w-3" />
                      <span
                        className={`text-xs ${isOverdue(task.dueDate) ? 'font-medium text-red-500' : 'text-muted-foreground'}`}
                      >
                        {task.dueDate}
                      </span>
                      {getPriorityIcon(task.priority)}
                    </div>
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
