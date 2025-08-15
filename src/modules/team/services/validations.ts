import { z } from 'zod';

export const invite_member_schema = z.object({
  fullName: z.string().min(2, { error: 'Full name must be at least 2 characters.' }),
  email: z.email({ error: 'Please enter a valid email address.' }),
  role: z.string({ error: 'Please select a role.' }).min(1, { error: 'Please select a role.' }),
  project: z.string({ error: 'Please select a project.' }).optional(),
  message: z
    .string()
    .min(10, { message: 'Invitation message must be at least 10 characters.' })
    .max(500, { message: 'Invitation message must not exceed 500 characters.' }),
});

export type IInviteMemberValues = z.infer<typeof invite_member_schema>;
