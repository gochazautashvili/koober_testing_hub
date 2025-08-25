import { Copy, Edit2, X } from 'lucide-react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DialogClose, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export const Header = () => {
  return (
    <DialogHeader className="border-b px-6 py-4">
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground font-mono text-sm">ID-1</span>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Copy className="h-3 w-3" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <DialogTitle className="text-lg font-semibold">title</DialogTitle>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Edit2 className="h-3 w-3" />
            </Button>
          </div>

          <DialogDescription className="flex items-center gap-2">
            <Select defaultValue="To Do">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="To Do">To Do</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="In Review">In Review</SelectItem>
                <SelectItem value="Done">Done</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="Critical">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
          </DialogDescription>
        </div>

        <DialogClose asChild>
          <Link href="/dashboard/tasks" className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
            <X className="h-4 w-4" />
          </Link>
        </DialogClose>
      </div>
    </DialogHeader>
  );
};
