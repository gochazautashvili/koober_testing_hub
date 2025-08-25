import { Plus } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { mockTask } from '../../constants';

export const SubTasks = () => {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold">Sub-tasks</h3>
      <div className="space-y-2">
        {mockTask.subtasks.map((subtask) => (
          <div key={subtask.id} className="flex items-center gap-2">
            <Checkbox checked={subtask.completed} />
            <span className={`text-sm ${subtask.completed ? 'text-muted-foreground line-through' : ''}`}>
              {subtask.title}
            </span>
          </div>
        ))}
        <Button variant="ghost" size="sm" className="mt-2">
          <Plus className="mr-2 h-4 w-4" />
          Add sub-task
        </Button>
      </div>
    </div>
  );
};
