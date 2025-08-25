import z from 'zod';

export const report_schema = z.object({
  project: z.string().min(1, { error: 'Please select a project' }),
  template: z.string().min(1, { error: 'Please select a template' }),
  title: z.string().min(5, { error: 'Title must be at least 5 characters' }).max(100),
  description: z.string().min(20, { error: 'Description must be at least 20 characters' }),
  severity: z.enum(['low', 'medium', 'high', 'critical'], { error: 'Please select a severity level' }),
  bugType: z.enum(['functional', 'ui', 'performance', 'compatibility', 'security', 'other'], {
    error: 'Please select a bug type',
  }),
  assignToSpecific: z.boolean(),
  assignedDeveloper: z.string().optional(),
  files: z.array(z.instanceof(File)).optional(),
});

export type IReportValidations = z.infer<typeof report_schema>;
