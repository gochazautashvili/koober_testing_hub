import z from 'zod';

import { pagination_params } from '@/services/validations';

export const member_query_schema = z.object({
  query: z.string().min(1).max(256).optional(),
  profession: z.string().max(256).optional(),
  ...pagination_params.shape,
});

export type IMemberQueryParams = z.infer<typeof member_query_schema>;
