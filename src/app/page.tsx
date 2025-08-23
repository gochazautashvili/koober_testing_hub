import { redirect } from 'next/navigation';

import { getAuth } from '@/auth/helpers';

export default async function Home() {
  const { user, session } = await getAuth();

  if (!user || !session) redirect('/auth');

  redirect('/dashboard');
}
