import z from 'zod';

import { pagination_params } from '@/services/validations';

export enum filter_member_status {
  ALL = 'All',
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}

export const member_query_schema = z.object({
  query: z.string().min(1).max(256).optional(),
  profession: z.string().max(256).optional(),
  status: z.enum(filter_member_status).default(filter_member_status.ALL),
  ...pagination_params.shape,
});

export type IMemberQueryParams = z.infer<typeof member_query_schema>;
