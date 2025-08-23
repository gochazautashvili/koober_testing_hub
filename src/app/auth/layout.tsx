import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

import { getAuth } from '@/auth/helpers';

export default async function AuthLayout({ children }: { children: ReactNode }) {
  const { session, user } = await getAuth();

  if (session || user) return redirect('/dashboard');

  return <main>{children}</main>;
}
