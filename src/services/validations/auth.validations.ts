import z from 'zod';

export const reset_password_schema = z
  .object({
    password: z
      .string()
      .min(8, 'პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს')
      .regex(/[A-Z]/, 'პაროლი უნდა შეიცავდეს მინიმუმ ერთ დიდ ასოს')
      .regex(/[a-z]/, 'პაროლი უნდა შეიცავდეს მინიმუმ ერთ პატარა ასოს')
      .regex(/[0-9]/, 'პაროლი უნდა შეიცავდეს მინიმუმ ერთ ციფრს')
      .regex(/[^A-Za-z0-9]/, 'პაროლი უნდა შეიცავდეს მინიმუმ ერთ სპეციალურ სიმბოლოს'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'პაროლები არ ემთხვევა',
    path: ['confirmPassword'],
  });

export type IResetPasswordValues = z.infer<typeof reset_password_schema>;
