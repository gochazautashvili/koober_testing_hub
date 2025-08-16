import { MoreHorizontal, Paperclip, Send } from 'lucide-react';
import { formatDate } from 'date-fns';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { mockTask } from '../../constants';

export const Comments = () => {
  return (
    <div className="space-y-4 border-t p-6">
      <h3 className="font-semibold">Comments</h3>

      {/* Existing Comments */}
      <div className="space-y-4">
        {mockTask.comments.map((comment) => (
          <div key={comment.id} className="space-y-3">
            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={comment.user.avatar || '/placeholder.svg'} />
                <AvatarFallback className="text-xs">{comment.user.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{comment.user.name}</span>
                  <span className="text-muted-foreground text-xs">
                    {formatDate(comment.timestamp, 'MMM d, h:mm a')}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Reply</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="text-sm">{comment.content}</p>

                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="border-muted ml-4 space-y-3 border-l-2 pl-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-3">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={reply.user.avatar || '/placeholder.svg'} />
                          <AvatarFallback className="text-xs">{reply.user.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{reply.user.name}</span>
                            <span className="text-muted-foreground text-xs">
                              {formatDate(reply.timestamp, 'MMM d, h:mm a')}
                            </span>
                          </div>
                          <p className="text-sm">{reply.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New Comment */}
      <div className="flex gap-3">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="text-xs">JD</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <Textarea placeholder="Add a comment... Use @username to mention someone" className="min-h-[80px]" />
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Paperclip className="h-4 w-4" />
              </Button>
            </div>
            <Button>
              <Send className="mr-2 h-4 w-4" />
              Comment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
