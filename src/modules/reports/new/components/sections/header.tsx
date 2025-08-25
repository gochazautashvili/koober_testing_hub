import { Bug, FileText } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Report a Bug</h1>
        <p className="text-muted-foreground">Help us improve by reporting issues you encounter</p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <FileText className="h-4 w-4" />
          Save as Draft
        </Button>
        <Button className="flex items-center gap-2">
          <Bug className="h-4 w-4" />
          Submit Report
        </Button>
      </div>
    </div>
  );
};
