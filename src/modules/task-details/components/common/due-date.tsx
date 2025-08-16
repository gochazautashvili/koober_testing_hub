import { CalendarIcon } from 'lucide-react';
import { formatDate } from 'date-fns';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { mockTask } from '../../constants';

export const DueDate = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Due Date</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formatDate(mockTask.dueDate, 'MMM d, yyyy')}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={mockTask.dueDate} />
        </PopoverContent>
      </Popover>
    </div>
  );
};
