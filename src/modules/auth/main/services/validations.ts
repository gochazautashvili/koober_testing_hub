import { z } from 'zod';

export const login_schema = z.object({
  email: z.email('არასწორი ელფოსტა').max(400),
  password: z.string().min(1, 'პაროლი აუცილებელია').max(400),
});

export type ILoginSchema = z.infer<typeof login_schema>;

export const forgot_password_schema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
});

export type IForgotPasswordValues = z.infer<typeof forgot_password_schema>;
