import { Search, Bell, Command } from 'lucide-react';
import Link from 'next/link';

import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

import { ThemeToggle } from './theme-toggle';
import { UserButton } from './user-button';

export function Header() {
  return (
    <header className="bg-sidebar sticky top-0 z-50 flex shrink-0 items-center gap-2 py-4 backdrop-blur-lg transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        </div>

        {/* Search bar */}
        <div className="max-w-md flex-1">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
            <Input placeholder="Search..." className="bg-muted/50 cursor-pointer pr-20 pl-10" readOnly />
            <div className="text-muted-foreground absolute top-1/2 right-3 flex -translate-y-1/2 transform items-center gap-1 text-xs">
              <Command className="h-3 w-3" />
              <span>K</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="relative">
            <Link href="/dashboard/notifications">
              <Bell className="h-4 w-4" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center p-0 text-xs"
              >
                {3}
              </Badge>
            </Link>
          </Button>

          {/* Dark mode toggle */}
          <ThemeToggle />

          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <UserButton />
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
