import z from 'zod';

export const token_schema = z.object({
  token: z.uuid(),
  code: z.string().min(6).max(6),
});

export type ITokenValues = z.infer<typeof token_schema>;
