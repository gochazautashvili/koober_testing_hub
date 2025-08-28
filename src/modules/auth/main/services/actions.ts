'use server';
import { cookies } from 'next/headers';
import { after } from 'next/server';
import bcrypt from 'bcryptjs';

import { IForgotPasswordValues, ILoginSchema, login_schema } from './validations';
import { sendEmail } from '@/library/smtp';
import { IActionResponse } from '@/types';
import { db } from '@/library/database';
import { lucia } from '@/auth/auth';
import PasswordResetEmail from '@/emails/password-reset-email';
import { env } from '@/helpers/env';
import { createToken } from '../../shared/helpers';

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

export const send_reset_password_link = async ({ email }: IForgotPasswordValues): IActionResponse => {
  try {
    const user = await db.user.findUnique({ where: { email: email } });

    if (!user) {
      return {
        success: false,
        message: 'რაცხა არ არის რიგზე. კიდევ ცადე თუ არა და დაგვიკავშირდით Koober Coders-ის სასტავს.',
      };
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expirationTime = new Date(Date.now() + 15 * 60 * 1000);

    const resetPassword = await db.resetPassword.create({
      data: {
        code,
        attempts: 3,
        userId: user.id,
        expires_at: expirationTime,
      },
    });

    const res = await createToken({ code, token: resetPassword.token }, 15 * 60 * 1000);

    if (!res.success || !res.token) return { success: false, message: res.message };

    after(async () => {
      await sendEmail({
        subject: 'Koober Coders პაროლის შეცვლა',
        to: [user.email],
        EmailTemplate: PasswordResetEmail({
          userEmail: user.email,
          userName: user.username,
          expirationTime: '15 წუთი',
          resetLink: `${env.APP_URL}/auth/reset-password/${res.token}`,
        }),
      });
    });

    return { success: true, message: 'შეამოწმე ელ.ფოსტა. თუ ყველაფერმა კარგად ჩაიარა ჯიგარო მაშინ იქ იქნება საშველი.' };
  } catch (_) {
    return {
      success: false,
      message: 'რაცხა არ არის რიგზე. კიდევ ცადე თუ არა და დაგვიკავშირდით Koober Coders-ის სასტავს.',
    };
  }
};
