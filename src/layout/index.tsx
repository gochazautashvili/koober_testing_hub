import { ReactNode } from 'react';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Sidebar } from './sidebar';
import { Header } from './header';

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <Sidebar variant="inset" />
      <SidebarInset className="!m-0 !rounded-none">
        <Header />

        <div className="p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};
