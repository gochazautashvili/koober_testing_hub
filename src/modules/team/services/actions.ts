'use server';
import { after } from 'next/server';
import bcrypt from 'bcryptjs';

import { IInviteMemberValues, invite_member_schema } from './validations';
import InviteMemberEmail from '@/emails/invite-member-email';
import { getErrorMessage } from '@/helpers/errors';
import { requireRole } from '@/auth/helpers';
import { sendEmail } from '@/library/smtp';
import { db } from '@/library/database';

export const invite_member = async (values: IInviteMemberValues) => {
  try {
    const { user } = await requireRole(['admin']);

    const { error, data } = invite_member_schema.safeParse(values);

    if (error) throw new Error(error.message);

    const { email, username, role, message, projectId, member_role, hasProject, member_professions, professions } =
      data;

    const existingMember = await db.user.findUnique({ where: { email } });

    if (existingMember) throw new Error('ეს ადამიანი უკვე არის გუნდში. რამდენჯერ გინდათ კიდე? ბიჯოს!');

    const password = crypto.randomUUID();
    const hashed_password = await bcrypt.hash(password, 10);

    const member = await db.user.create({
      data: {
        role,
        email,
        username,
        password: hashed_password,
        professions: { connect: professions.map((name) => ({ name })) },
      },
    });

    if (hasProject) {
      const project = await db.project.findUnique({ where: { id: projectId } });

      if (!project) throw new Error('პროექტი ვერ მოიძებნა. რას მაიმუნობთ?');

      after(async () => {
        await db.projectMember.create({
          data: {
            role: member_role,
            user_id: member.id,
            project_id: project.id,
            professions: { connect: member_professions.map((name) => ({ name })) },
          },
        });

        await sendEmail({
          from: user.email,
          to: [member.email],
          subject: 'Koober Coders - მოწვევა',
          EmailTemplate: InviteMemberEmail({
            recipientRole: `${member_role} - ${member_professions.join(', ')}`,
            invitedByName: user.username,
            recipientEmail: member.email,
            temporaryPassword: password,
            projectName: project.name,
            invitedByRole: user.role,
            personalMessage: message,
          }),
        });
      });
    } else {
      after(async () => {
        await sendEmail({
          from: 'user.email',
          to: [member.email],
          subject: 'Koober Coders - მოწვევა',
          EmailTemplate: InviteMemberEmail({
            recipientRole: `${member.role} - ${professions.join(', ')}`,
            invitedByName: user.username,
            recipientEmail: member.email,
            temporaryPassword: password,
            invitedByRole: user.role,
            personalMessage: message,
          }),
        });
      });
    }

    return { message: 'მოწვევა წარმატებით გაიგზავნა. თუ უნდა უნდა თუარადა თვითონ კარგავ :)' };
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const remove_member = async (id: string) => {
  try {
    const { user } = await requireRole(['admin']);

    if (user.id === id) throw new Error('არვიცია ეს როგორ ქენი ჯიგარო მაგრამ შენ თავს ვერ წაშლი აქედან.');

    await db.user.delete({ where: { id } });

    return { message: 'ეს ადამიანი წარმატებით ამოიშალა გუნდიდან.' };
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
