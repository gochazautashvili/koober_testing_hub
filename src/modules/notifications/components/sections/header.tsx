import { Bell, CheckCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Bell className="text-primary h-8 w-8" />
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">6 unread notifications</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          <CheckCheck className="mr-2 h-4 w-4" />
          Mark all as read
        </Button>
      </div>
    </div>
  );
};
