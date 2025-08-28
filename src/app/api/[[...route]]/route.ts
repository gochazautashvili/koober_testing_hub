import { handle } from 'hono/vercel';
import { Hono } from 'hono';

// Servers
import projectsRoute from '@/modules/projects/main/server';
import teamRoute from '@/modules/team/server';
import globalRoute from '@/server/global';

const app = new Hono().basePath('/api');

const _routes = app.route('/team', teamRoute).route('/projects', projectsRoute).route('/global', globalRoute);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);

export type IServer = typeof _routes;
