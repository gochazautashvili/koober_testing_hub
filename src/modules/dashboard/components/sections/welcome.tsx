import { Bug, Calendar, FolderOpen, Plus } from 'lucide-react';
import { formatDate } from 'date-fns';

import { Button } from '@/components/ui/button';

export const Welcome = () => {
  return (
    <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-6 dark:from-blue-950/50 dark:to-indigo-950/50">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, John Doe</h1>
          <div className="text-muted-foreground flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(new Date(), 'EEEE, MMMM do, yyyy')}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="destructive">
            <Bug className="mr-2 h-4 w-4" />
            Report Bug
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Create Task
          </Button>
          <Button variant="outline">
            <FolderOpen className="mr-2 h-4 w-4" />
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
};
