import { z } from 'zod';

import { member_role, user_role } from '@/generated/prisma/prisma';

export const invite_member_schema = z.discriminatedUnion('hasProject', [
  // When project is selected
  z.object({
    hasProject: z.literal(true),
    username: z.string().min(2, { message: 'სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს.' }),
    email: z.email({ message: 'გთხოვთ, შეიყვანოთ ვალიდური ელ-ფოსტის მისამართი.' }),
    role: z.enum(user_role, { message: 'გთხოვთ, აირჩიოთ როლი.' }),
    projectId: z.string({ message: 'გთხოვთ, აირჩიოთ პროექტი.' }),
    member_role: z.enum(member_role, { message: 'გთხოვთ, აირჩიოთ წევრის როლი.' }),
    professions: z
      .array(z.string({ message: 'გთხოვთ, მიუთითოთ პროფესია.' }).min(1, { message: 'გთხოვთ, მიუთითოთ პროფესია.' }))
      .min(1),
    member_professions: z
      .array(
        z
          .string({ message: 'გთხოვთ, მიუთითოთ პროფესია პროექტში.' })
          .min(1, { message: 'გთხოვთ, მიუთითოთ პროფესია პროექტში.' }),
      )
      .min(1),
    message: z
      .string()
      .min(10, { message: 'მოწვევის შეტყობინება უნდა შეიცავდეს მინიმუმ 10 სიმბოლოს.' })
      .max(500, { message: 'მოწვევის შეტყობინება არ უნდა აღემატებოდეს 500 სიმბოლოს.' }),
  }),

  // When no project is selected
  z.object({
    hasProject: z.literal(false),
    username: z.string().min(2, {
      message: 'სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს.',
    }),
    email: z.email({
      message: 'გთხოვთ, შეიყვანოთ ვალიდური ელ-ფოსტის მისამართი.',
    }),
    role: z.enum(user_role, { message: 'გთხოვთ, აირჩიოთ როლი.' }),
    professions: z
      .array(z.string({ message: 'გთხოვთ, მიუთითოთ პროფესია.' }).min(1, { message: 'გთხოვთ, მიუთითოთ პროფესია.' }))
      .min(1),

    projectId: z.undefined(),
    member_role: z.undefined(),
    member_professions: z.undefined(),
    message: z
      .string()
      .min(10, { message: 'მოწვევის შეტყობინება უნდა შეიცავდეს მინიმუმ 10 სიმბოლოს.' })
      .max(500, { message: 'მოწვევის შეტყობინება არ უნდა აღემატებოდეს 500 სიმბოლოს.' }),
  }),
]);

export type IInviteMemberValues = z.infer<typeof invite_member_schema>;
