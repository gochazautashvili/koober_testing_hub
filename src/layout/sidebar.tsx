import { ComponentProps } from 'react';
import { Bug } from 'lucide-react';
import Link from 'next/link';

import {
  SidebarMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarMenuItem,
  SidebarMenuButton,
  Sidebar as AppSidebar,
} from '@/components/ui/sidebar';

import { Navigation } from './navigation';
import { Footer } from './footer';

export const Sidebar = ({ ...props }: ComponentProps<typeof AppSidebar>) => {
  return (
    <AppSidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-transparent active:bg-transparent">
              <Link href="/dashboard" className="flex items-center gap-2">
                <div className="bg-sidebar-primary flex h-8 w-8 items-center justify-center rounded-lg">
                  <Bug className="text-sidebar-primary-foreground h-4 w-4" />
                </div>
                <span className="text-sidebar-foreground font-semibold">Koober Testing Hub</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <Navigation />
      </SidebarContent>

      <SidebarFooter>
        <Footer />
      </SidebarFooter>
    </AppSidebar>
  );
};
