import 'server-only';
import jwt from 'jsonwebtoken';

import { env } from '@/helpers/env';
import { ITokenValues, token_schema } from './validations';

const key = env.RESET_PASSWORD_JWT_SECRET!;

export const createToken = async (payload: ITokenValues, expiresIn: number) => {
  const { data, error } = token_schema.safeParse(payload);

  if (error) return { success: false, message: error.message };

  const token = jwt.sign(data, key, { algorithm: 'HS256', expiresIn: expiresIn });

  return { success: true, message: 'Token created successfully', token };
};

export const getTokenPayload = async (session: string) => {
  try {
    const payload = await jwt.verify(session, key, {
      algorithms: ['HS256'],
    });

    const { data, error } = token_schema.safeParse(payload);

    if (error) return { success: false, message: 'დაფიქსირდა დარღვევა! საცადეთ თავიდან ან გაგზავნეთ ახალი მეილი.' };

    return { success: true, message: 'Token decoded successfully', data };
  } catch (_) {
    return { success: false, message: 'ამ ლინკს ვადა უკვე ამოეწურა! სცადეთ ახალი ლინკის გაგზავნა თქვენს მეილზე.' };
  }
};
