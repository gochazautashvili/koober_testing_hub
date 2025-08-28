import 'dotenv/config';

export const env = {
  DATABASE_URL: process.env.DATABASE_URL,

  // SMTP
  NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY,

  // JWT
  RESET_PASSWORD_JWT_SECRET: process.env.RESET_PASSWORD_JWT_SECRET,

  // Others
  APP_URL: process.env.NEXT_PUBLIC_APP_URL,
};
