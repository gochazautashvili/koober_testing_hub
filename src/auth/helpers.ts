'use server';
import { cookies } from 'next/headers';
import { cache } from 'react';

import { user_role } from '@/generated/prisma/prisma';
import { lucia } from './auth';

// Current user-ის მოძებნა (cached)
export const getAuth = cache(async () => {
  const sessionId = (await cookies()).get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) return { user: null, session: null };

  try {
    const result = await lucia.validateSession(sessionId);

    // თუ session არასწორია, წაშლის cookie-ს
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      (await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }

    // თუ session ახალია, განახლდება cookie
    if (result.session?.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      (await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }

    return result;
  } catch (_) {
    return { user: null, session: null };
  }
});

// ავტორიზაციის შემოწმება
export const requireAuth = async () => {
  const { user, session } = await getAuth();

  if (!user || !session) throw new Error('Unauthorized');

  return { user, session };
};

export const requireRole = async (role: user_role[]) => {
  const { user, session } = await getAuth();

  if (!user || !session) throw new Error('Unauthorized');

  if (!role.includes(user.role)) throw new Error('Unauthorized');

  return { user, session };
};
