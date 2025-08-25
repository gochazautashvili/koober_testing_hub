'use server';
import { after } from 'next/server';
import bcrypt from 'bcryptjs';

import { IResetPasswordValues } from '@/services/validations';
import { getTokenPayload } from '../../shared/helpers';
import { IActionResponse } from '@/types';
import { db } from '@/library/database';

export const reset_password = async (values: IResetPasswordValues, token: string): IActionResponse => {
  try {
    const res = await getTokenPayload(token);

    if (!res.success || !res.data) return { success: false, message: res.message };

    const resetPassword = await db.resetPassword.findUnique({ where: { token: res.data.token } });

    if (!resetPassword) {
      return { success: false, message: 'პაროლის ცვლილებისას მოხდა ცვლილება! სცადეთ თავიდან.' };
    }

    if (resetPassword.code !== res.data.code) {
      return { success: false, message: 'პაროლის ცვლილებისას მოხდა ცვლილება! სცადეთ თავიდან.' };
    }

    if (resetPassword.attempts > 3) {
      return {
        success: false,
        message: 'თქვენი მცდელობების რაოდენობა ამოიწურა! გაგზავნეთ ახლაი მეილი და სცადეთ თავიდან.',
      };
    }

    if (resetPassword.expires_at < new Date()) {
      return { success: false, message: 'ამ ლინკს ვადა უკვე ამოეწურა! სცადეთ ახალი ლინკის გაგზავნა თქვენს მეილზე.' };
    }

    const password = await bcrypt.hash(values.password, 10);

    const user = await db.user.update({ where: { id: resetPassword.userId }, data: { password } });

    after(async () => await db.resetPassword.deleteMany({ where: { userId: user.id } }));

    return { success: true, message: 'პაროლი წარმატებით შეიცვალა.' };
  } catch (_) {
    return { success: false, message: 'პაროლის ცვლილებისას მოხდა ცვლილება! სცადეთ თავიდან.' };
  }
};
