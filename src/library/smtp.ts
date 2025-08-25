import { ReactNode } from 'react';
import { Resend } from 'resend';

import { env } from '@/helpers/env';

const resend = new Resend(env.NEXT_PUBLIC_RESEND_API_KEY);

export interface ISendEmailProps {
  EmailTemplate: ReactNode;
  subject: string;
  from?: string;
  to: string[];
}

// TODO: fix and add real data, to & from
export const sendEmail = async (props: ISendEmailProps) => {
  const { subject, EmailTemplate } = props;

  const { error } = await resend.emails.send({
    to: ['gochazautashvili2017@gmail.com'],
    from: 'Acme <onboarding@resend.dev>',
    react: EmailTemplate,
    subject: subject,
  });

  if (error) return { success: false, message: error.message };

  return { success: true, message: 'Email sent successfully' };
};
