import { z } from 'zod';

export const profile_schema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' })
    .max(50, { message: 'First name must not exceed 50 characters.' })
    .regex(/^[a-zA-Z\s-']+$/, { message: 'First name can only contain letters, spaces, hyphens, and apostrophes.' }),

  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' })
    .max(50, { message: 'Last name must not exceed 50 characters.' })
    .regex(/^[a-zA-Z\s-']+$/, { message: 'Last name can only contain letters, spaces, hyphens, and apostrophes.' }),

  email: z
    .email({ message: 'Please enter a valid email address.' })
    .min(1, { message: 'Email is required.' })
    .max(100, { message: 'Email must not exceed 100 characters.' }),

  phone: z
    .string()
    .min(7, { message: 'Phone number must be at least 10 digits.' })
    .regex(/^[+]?[(]?[0-9]{1,3}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/, {
      message: 'Please enter a valid phone number.',
    })
    .optional()
    .or(z.literal('')),

  photo: z.string().optional().or(z.literal('')),
});

export type IProfileValues = z.infer<typeof profile_schema>;
