import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn, getInitials } from '@/library/utils';

type IProps = {
  className?: string;
  members: { username: string; email: string; avatar: string | null }[];
};

export const MemberAvatarCard = ({ members, className }: IProps) => {
  return (
    <div className="flex -space-x-2">
      {members.slice(0, 3).map((user, index) => (
        <HoverCard openDelay={100} key={index}>
          <HoverCardTrigger asChild>
            <Avatar className={cn('border-background size-10 border-2', className)}>
              <AvatarImage src={user.avatar || ''} />
              <AvatarFallback className="text-xs">{getInitials(user.username)}</AvatarFallback>
            </Avatar>
          </HoverCardTrigger>
          <HoverCardContent side="top">
            <div className="flex gap-2">
              <Avatar className="border-background size-12 rounded-md border-2">
                <AvatarImage src={user.avatar || ''} />
                <AvatarFallback className="rounded-md text-lg font-semibold">
                  {getInitials(user.username)}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <h1 className="text-base font-semibold">{user.username}</h1>
                <p className="text-sm opacity-80">{user.email}</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
      {members.length > 3 && (
        <div className="bg-muted border-background flex h-6 w-6 items-center justify-center rounded-full border-2">
          <span className="text-muted-foreground text-xs">+{members.length - 3}</span>
        </div>
      )}
    </div>
  );
};
