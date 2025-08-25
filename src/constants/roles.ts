import { user_role } from '@/generated/prisma/prisma';

export const role_values: Record<user_role, string> = {
  admin: 'ადმინისტრატორი',
  developer: 'დეველოპერი',
  tester: 'ტესტერი',
};

export const role_options: { value: user_role; label: string }[] = [
  { value: 'admin', label: role_values.admin },
  { value: 'developer', label: role_values.developer },
  { value: 'tester', label: role_values.tester },
];
