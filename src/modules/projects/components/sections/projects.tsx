'use client';
import { FolderOpen, Plus } from 'lucide-react';
import { Fragment } from 'react';

import { Button } from '@/components/ui/button';
import { useView } from '../../hooks/use-view';
import { GridView } from './grid-view';
import { ListView } from './list-view';

export const Projects = () => {
  const { view } = useView();
  const isEmpty = false;

  return <Fragment>{isEmpty ? <EmptyState /> : view === 'grid' ? <GridView /> : <ListView />}</Fragment>;
};

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="bg-muted mb-6 flex h-24 w-24 items-center justify-center rounded-full">
      <FolderOpen className="text-muted-foreground h-12 w-12" />
    </div>
    <h3 className="mb-2 text-xl font-semibold">No projects yet</h3>
    <p className="text-muted-foreground mb-6 max-w-md">
      Get started by creating your first project to track bugs and manage your development workflow.
    </p>
    <Button>
      <Plus className="mr-2 h-4 w-4" />
      Create your first project
    </Button>
  </div>
);
