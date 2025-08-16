import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Filters = () => {
  return (
    <div className="border-b p-6">
      <div className="relative flex-1">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
        <Input placeholder="Search projects, tasks, bugs, and team members..." className="pl-10" />
      </div>

      <div className="text-muted-foreground flex items-center justify-between text-sm">
        <span>Found {7} results</span>
        <div className="flex items-center gap-2">
          <span>Sort by:</span>
          <Button variant="ghost" size="sm">
            Relevance
          </Button>
          <Button variant="ghost" size="sm">
            Date
          </Button>
          <Button variant="ghost" size="sm">
            Priority
          </Button>
        </div>
      </div>
    </div>
  );
};
