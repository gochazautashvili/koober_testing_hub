import z from 'zod';

export const pagination_params = z.object({
  page: z.coerce.number().min(1).max(999_999).default(1),
  take: z.coerce.number().min(1).max(50).default(10),
});

export type IPaginationParams = z.infer<typeof pagination_params>;
