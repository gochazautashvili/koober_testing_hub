'use client';
import { User, Settings, LogOut, Info, Loader } from 'lucide-react';
import { Fragment, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/providers/auth-provider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { getInitials } from '@/library/utils';
import { logout } from '@/auth/actions';

export const UserButton = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const user = useAuth();

  const onLogout = () => {
    startTransition(async () => {
      await logout();

      router.push('/auth');
    });
  };

  return (
    <DropdownMenuContent className="min-w-56" align="end">
      <DropdownMenuLabel className="p-0 font-normal">
        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={user.avatar} alt={user.email} />
            <AvatarFallback className="rounded-lg">{getInitials(user.username)}</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{user.username}</span>
            <span className="text-muted-foreground truncate text-xs">{user.email}</span>
          </div>
        </div>
      </DropdownMenuLabel>

      <DropdownMenuSeparator />

      <DropdownMenuItem asChild>
        <Link href={`/dashboard/profile/${user.id}`}>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </Link>
      </DropdownMenuItem>

      <DropdownMenuItem asChild>
        <Link href="/dashboard/notifications">
          <Info className="mr-2 h-4 w-4" />
          Notifications
        </Link>
      </DropdownMenuItem>

      <DropdownMenuItem asChild>
        <Link href="/dashboard/settings">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </Link>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem
        disabled={isPending}
        onClick={(e) => {
          e.preventDefault();

          onLogout();
        }}
      >
        {isPending ? (
          <Fragment>
            <Loader className="mr-2 h-4 w-4 animate-spin" />
            <span>Logging out...</span>
          </Fragment>
        ) : (
          <Fragment>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Fragment>
        )}
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
