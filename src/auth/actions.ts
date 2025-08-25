'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { lucia } from './index';

export const logout = async () => {
  const sessionId = (await cookies()).get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) redirect('/');

  await lucia.invalidateSession(sessionId);

  const sessionCookie = lucia.createBlankSessionCookie();

  (await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  redirect('/');
};
