import z from 'zod';

export const project_schema = z.object({
  name: z.string().min(1, 'Project name is required').max(50, 'Project name must be less than 50 characters'),
  description: z.string().optional(),
  type: z.enum(['web', 'mobile', 'desktop', 'api', 'other']),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  teamMembers: z.array(z.string()).min(1, 'At least one team member is required'),
  budget: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high', 'critical']),
});

export type IProjectValues = z.infer<typeof project_schema>;
