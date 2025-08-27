import z from 'zod';

import { member_role } from '@/generated/prisma/prisma';

export const project_schema = z
  .object({
    end_date: z.date(),
    start_date: z.date(),
    description: z.string().optional(),
    type: z.enum(['web', 'mobile', 'desktop', 'api', 'other']),
    team_members: z.array(
      z.object({
        id: z.string(),
        role: z.enum(member_role),
      }),
    ),
    name: z.string().min(1, 'Project name is required').max(50, 'Project name must be less than 50 characters'),
  })
  .refine(
    (data) => {
      // startDate must be less than or equal to endDate
      if (data.start_date && data.end_date) {
        return data.start_date <= data.end_date;
      }
      return true;
    },
    {
      message: 'Start date must be before or equal to end date',
      path: ['startDate'],
    },
  )
  .refine(
    (data) => {
      // endDate must be greater than or equal to startDate
      if (data.start_date && data.end_date) {
        return data.end_date >= data.start_date;
      }
      return true;
    },
    {
      message: 'End date must be after or equal to start date',
      path: ['endDate'],
    },
  );

export type IProjectValues = z.infer<typeof project_schema>;
