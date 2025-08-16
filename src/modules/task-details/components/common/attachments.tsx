import { Paperclip } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { mockTask } from '../../constants';

export const Attachments = () => {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold">Attachments</h3>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {mockTask.attachments.map((attachment) => (
          <Card key={attachment.id} className="p-3">
            <div className="flex items-center gap-3">
              <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
                <Paperclip className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{attachment.name}</p>
                <p className="text-muted-foreground text-xs">{attachment.size}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
