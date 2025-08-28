import { Prisma } from '@/generated/prisma/prisma';

export const member_selector = {
  id: true,
  email: true,
  avatar: true,
  username: true,
  professions: { select: { name: true } },
} satisfies Prisma.UserSelect;

export type IMemberSelector = Prisma.UserGetPayload<{ select: typeof member_selector }>;
