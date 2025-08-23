import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

import { AuthProvider } from '@/providers/auth-provider';
import { getAuth } from '@/auth/helpers';

import { DashboardLayout } from '@/layout';

export default async function MainLayout({ children }: { children: ReactNode }) {
  const { user, session } = await getAuth();

  if (!session || !user) redirect('/auth');

  return (
    <AuthProvider user={user}>
      <DashboardLayout>{children}</DashboardLayout>;
    </AuthProvider>
  );
}
