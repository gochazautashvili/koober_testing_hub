import { ReactNode } from 'react';

import { DashboardLayout } from '@/layout';

export default function MainLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
