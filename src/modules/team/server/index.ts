import { Hono } from 'hono';
import { GetRoutes } from './routes/get.routes';

const app = new Hono().route('/', GetRoutes);

export default app;
