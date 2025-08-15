import { Plus } from 'lucide-react';

import { columns, tasks } from '../../constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TaskCard } from '../common/task-card';

export const KanbanBoardView = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {columns.map((column) => (
        <div key={column.id} className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`h-3 w-3 rounded-full ${
                  column.color === 'gray'
                    ? 'bg-gray-400'
                    : column.color === 'blue'
                      ? 'bg-blue-400'
                      : column.color === 'yellow'
                        ? 'bg-yellow-400'
                        : 'bg-green-400'
                }`}
              />
              <h3 className="text-sm font-semibold">{column.title}</h3>
              <Badge variant="secondary" className="text-xs">
                {column.count}
              </Badge>
            </div>
          </div>

          <div className="space-y-3">
            {tasks
              .filter((task) => task.status === column.id)
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}

            <Button variant="ghost" className="text-muted-foreground hover:text-foreground w-full justify-start">
              <Plus className="mr-2 h-4 w-4" />
              Add task
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
