import express from 'express';
import weatherRouter from './routes/weatherRoutes.js';
import route from './routes/routes.json' assert { type: 'json' };
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(route.ROOT, weatherRouter);

export default app;
