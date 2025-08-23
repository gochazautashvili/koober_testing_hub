'use client';
import { Grid3X3, List } from 'lucide-react';

import { InviteMember } from '../dialogs/invite-member';
import { Button } from '@/components/ui/button';
import { useView } from '@/hooks/helpers/use-view';

export const Header = () => {
  const { view, setView } = useView();

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Team Members (7)</h1>
        <p className="text-muted-foreground">Manage team members and track their performance</p>
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

        <InviteMember />
      </div>
    </div>
  );
};
