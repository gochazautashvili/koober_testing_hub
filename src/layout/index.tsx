import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Sidebar } from './sidebar';
import { ReactNode } from 'react';
import { Header } from './header';

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <Sidebar variant="inset" />
      <SidebarInset className="!m-0 !rounded-none">
        <Header />

        <main className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 p-6 md:gap-6 md:py-6">{children}</div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};
