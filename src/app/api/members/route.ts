import { member_selector } from './services/selectors';
import { getErrorMessage } from '@/helpers/errors';
import { requireRole } from '@/auth/helpers';
import { errors } from '@/constants/errors';
import { db } from '@/library/database';

export async function GET() {
  try {
    await requireRole(['admin']);

    const response = await db.user.findMany({ select: member_selector });

    return Response.json(response, { status: 200 });
  } catch (error) {
    return new Response(`${errors.server_error}. ${getErrorMessage(error)}`, {
      status: 500,
    });
  }
}
