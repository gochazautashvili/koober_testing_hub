import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockTask } from '../../constants';

export const Labels = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Labels</label>
      <div className="flex flex-wrap gap-1">
        {mockTask.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
        <Button variant="ghost" size="sm" className="h-6 px-2">
          <Plus className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};
