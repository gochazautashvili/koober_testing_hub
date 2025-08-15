import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export const Header = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
        <p className="text-muted-foreground">Manage and track development tasks across all projects</p>
      </div>
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        New Task
      </Button>
    </div>
  );
};
