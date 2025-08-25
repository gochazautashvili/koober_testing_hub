'use server';
import bcrypt from 'bcryptjs';

import { change_password_schema, IChangePasswordValues } from './validations';
import { requireAuth } from '@/auth/helpers';
import { errors } from '@/constants/errors';
import { IActionResponse } from '@/types';
import { db } from '@/library/database';

// EDIT
export const change_password = async (values: IChangePasswordValues): IActionResponse => {
  try {
    const { data, error } = change_password_schema.safeParse(values);

    if (error) return { success: false, message: error.message };

    const { user } = await requireAuth();

    const existingUser = await db.user.findUnique({ where: { id: user.id } });

    if (!existingUser) return { success: false, message: errors.unauthorized };

    const isPasswordCorrect = await bcrypt.compare(data.oldPassword, existingUser.password);

    if (!isPasswordCorrect) return { success: false, message: 'დაფიქსირდა შეცდეომ სცადეთ მოგვიანებით.' };

    const hashedPassword = await bcrypt.hash(data.password, 10);

    await db.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    return { success: true, message: 'პაროლი წარმატებით შეიცვალა' };
  } catch (_) {
    return { success: false, message: errors.server_error };
  }
};
