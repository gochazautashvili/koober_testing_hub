import { Prisma } from '@/generated/prisma/prisma';

export const member_selector_for_projects = {
  id: true,
  avatar: true,
  username: true,
  professions: { select: { name: true } },
} satisfies Prisma.UserSelect;

export type IMemberSelectorForProjects = Prisma.UserGetPayload<{ select: typeof member_selector_for_projects }>;
