import z from 'zod';

import { pagination_params } from '@/services/validations';
import { project_status } from '@/generated/prisma/prisma';

export const project_query_schema = z.object({
  query: z.string().min(1).max(256).optional(),
  status: z.enum(project_status).optional(),
  ...pagination_params.shape,
});

export type IProjectQueryParams = z.infer<typeof project_query_schema>;
