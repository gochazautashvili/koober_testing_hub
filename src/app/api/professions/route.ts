import { IProfessionResponse } from './services/models';
import { getErrorMessage } from '@/helpers/errors';
import { requireRole } from '@/auth/helpers';
import { errors } from '@/constants/errors';
import { db } from '@/library/database';

export async function GET() {
  try {
    await requireRole(['admin']);

    const data = await db.profession.findMany({ select: { id: true, name: true } });

    const response: IProfessionResponse[] = data;

    return Response.json(response, { status: 200 });
  } catch (error) {
    return new Response(`${errors.server_error} - ${getErrorMessage(error)}`, { status: 500 });
  }
}
