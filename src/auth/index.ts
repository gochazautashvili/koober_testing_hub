import { PrismaAdapter } from '@lucia-auth/adapter-prisma';

import { Lucia, TimeSpan } from 'lucia';

import { user_role } from '@/generated/prisma/prisma';
import { db } from '@/library/database';

// Lucia Prisma adapter
const adapter = new PrismaAdapter(db.session, db.user);

export const lucia = new Lucia(adapter, {
  sessionCookie: { expires: false },
  sessionExpiresIn: new TimeSpan(7, 'd'),
  getUserAttributes: (attributes) => {
    return {
      id: attributes.id,
      role: attributes.role,
      email: attributes.email,
      username: attributes.username,
    };
  },
});

// TypeScript types
declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: {
      id: string;
      email: string;
      role: user_role;
      username: string;
    };
  }
}
