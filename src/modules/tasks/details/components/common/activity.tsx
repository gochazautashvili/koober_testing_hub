import { formatDate } from 'date-fns';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockTask } from '../../constants';

export const Activity = () => {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold">Activity</h3>
      <div className="space-y-4">
        {mockTask.activity.map((activity) => (
          <div key={activity.id} className="flex gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={activity.user.avatar || '/placeholder.svg'} />
              <AvatarFallback className="text-xs">{activity.user.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{activity.user.name}</span>
                <span className="text-muted-foreground text-xs">{formatDate(activity.timestamp, 'MMM d, h:mm a')}</span>
              </div>
              <p className="text-muted-foreground text-sm">{activity.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
