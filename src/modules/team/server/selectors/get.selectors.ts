import { Prisma } from '@/generated/prisma/prisma';

export const member_selector = {
  id: true,
  role: true,
  email: true,
  avatar: true,
  username: true,
  is_active: true,
  professions: { select: { name: true } },
  last_login: true,
  _count: {
    select: {
      project_memberships: { where: { project: { status: 'active' } } },
      tasks_assigned: { where: { status: 'in_progress' } },
    },
  },
} satisfies Prisma.UserSelect;

export type IMemberSelector = Prisma.UserGetPayload<{ select: typeof member_selector }>;
