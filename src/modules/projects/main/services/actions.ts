'use server';
import { after } from 'next/server';

import { IProjectValues, project_schema } from './validations';
import NewProjectEmail from '@/emails/new-project-email';
import { requireRole } from '@/auth/helpers';
import { errors } from '@/constants/errors';
import { sendEmail } from '@/library/smtp';
import { db } from '@/library/database';

export const create_project = async (values: IProjectValues) => {
  try {
    const { data, error } = project_schema.safeParse(values);

    if (error) throw new Error(error.message);

    const { user } = await requireRole(['admin']);

    const { name, team_members, type, description, end_date, start_date } = data;

    const team_member_ids = team_members.map((e) => e.id);

    const members = await db.user.findMany({
      where: { id: { in: team_member_ids } },
      select: { id: true, email: true, username: true },
    });

    const project = await db.project.create({
      data: {
        name,
        type,
        end_date,
        start_date,
        description,
        created_by_id: user.id,
        members: { createMany: { data: team_members.map((e) => ({ user_id: e.id, role: e.role })) } },
      },
    });

    after(async () => {
      await sendEmail({
        from: user.email,
        to: members.map(({ email }) => email),
        subject: 'Koober Coders - ახალი პროექტი დაგვემატა ❤️',
        EmailTemplate: NewProjectEmail({
          project,
          createdBy: user.username,
          members: members.map((e) => ({
            email: e.email,
            username: e.username,
            role: team_members.find((t) => t.id === e.id)?.role || 'member',
          })),
        }),
      });
    });

    return { message: 'ახალი პროექტი წარმატებით შეიამნა.' };
  } catch (_) {
    throw new Error(errors.server_error);
  }
};
