'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { after } from 'next/server';
import bcrypt from 'bcryptjs';

import { ILoginSchema, login_schema } from './validations';
import { db } from '@/library/database';
import { lucia } from '@/auth';

export const login = async (values: ILoginSchema) => {
  const { data, error } = login_schema.safeParse(values);

  if (error) return { success: false, message: error.message };

  const { email, password } = data;

  try {
    // Find user by email
    const user = await db.user.findUnique({ where: { email } });

    if (!user) return { success: false, message: 'არასწორი ელფოსტა ან პაროლი' };

    // პაროლის შემოწმება
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) return { success: false, message: 'არასწორი ელფოსტა ან პაროლი' };

    // Session-ის შექმნა
    const sessionData = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(sessionData.id);

    (await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    after(async () => {
      await db.user.update({ where: { id: user.id }, data: { last_login: new Date() } });
    });

    return { success: true, message: 'ვააა საღორ წარმატებით შეხვედი :)' };
  } catch (_) {
    return { success: false, message: 'რაცხა არ არის სწორად მოგვიანებით საცადე. ან დაგვიკავშირდი!' };
  }
};

export const logout = async () => {
  const sessionId = (await cookies()).get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) redirect('/');

  await lucia.invalidateSession(sessionId);

  const sessionCookie = lucia.createBlankSessionCookie();

  (await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  redirect('/');
};
