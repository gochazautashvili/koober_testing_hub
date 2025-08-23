'use client';
import { Grid3X3, List, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { CreateProjectModal } from '../dialogs/create-project';

import { useView } from '@/hooks/helpers/use-view';

export const Header = () => {
  const { setView, view } = useView();

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projects (2)</h1>
        <p className="text-muted-foreground">Manage and track all your development projects</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center rounded-lg border p-1">
          <Button
            variant={view === 'grid' ? 'default' : 'ghost'}
            onClick={() => setView('grid')}
            className="h-8 px-3"
            size="sm"
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={view === 'list' ? 'default' : 'ghost'}
            onClick={() => setView('list')}
            className="h-8 px-3"
            size="sm"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>

        <CreateProjectModal>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </CreateProjectModal>
      </div>
    </div>
  );
};
