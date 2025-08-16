import z from 'zod';

export const task_schema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high', 'critical']),
  severity: z.enum(['minor', 'major', 'critical', 'blocker']),
  project: z.string().min(1, 'Project is required'),
  assignee: z.string().optional(),
  dueDate: z.date().optional(),
  labels: z.array(z.string()).optional(),
});

export type ITaskValues = z.infer<typeof task_schema>;
