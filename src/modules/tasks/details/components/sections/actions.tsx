import { CheckCircle, Clock, Eye, Link, MoreHorizontal, User } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export const Actions = () => {
  return (
    <div className="bg-muted/30 flex items-center justify-between border-t p-4">
      <div className="flex gap-2">
        <Button>
          <CheckCircle className="mr-2 h-4 w-4" />
          Mark Complete
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Clock className="mr-2 h-4 w-4" />
              Log Time
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-3">
              <h4 className="font-medium">Log Time</h4>
              <div className="flex gap-2">
                <Input placeholder="2h 30m" />
                <Button>Log</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <MoreHorizontal className="mr-2 h-4 w-4" />
            More Actions
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link className="mr-2 h-4 w-4" />
            Copy Link
          </DropdownMenuItem>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            Assign to Me
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Eye className="mr-2 h-4 w-4" />
            Watch
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">Delete Task</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
