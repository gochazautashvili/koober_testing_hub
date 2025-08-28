import { Prisma } from '@/generated/prisma/prisma';

export const project_selector = {
  id: true,
  name: true,
  status: true,
  updated_at: true,
  description: true,
  members: { select: { user: { select: { username: true, avatar: true, email: true } } } },
  _count: {
    select: {
      members: true,
      tasks: { where: { OR: [{ status: 'in_progress' }, { status: 'in_review' }, { status: 'open' }] } },
    },
  },
} satisfies Prisma.ProjectSelect;

export type IProjectSelector = Prisma.ProjectGetPayload<{ select: typeof project_selector }>;
