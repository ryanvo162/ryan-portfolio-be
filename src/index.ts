import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import projectRoutes from './routes/project';
import adminRoutes from './routes/admin';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGO_URL || '')
  .then(() => {
    console.log('\x1b[35m%s\x1b[0m', 'Connected to MongoDB');
  })
  .catch((error) => {
    console.log('\x1b[31m%s\x1b[0m', 'Error connecting to MongoDB', error);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONT_END_URL || '', 'http://localhost:3000', 'http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'X-Requested-With',
      'X-HTTP-Method-Override',
      'Accept',
      'Authorization',
    ],
  })
);

app.get('/', (_req, res) => {
  res.json({ message: 'Portfolio API' });
});

app.use('/admin', adminRoutes);
app.use('/projects', projectRoutes);

app.listen(port, () => {
  console.log('\x1b[34m%s\x1b[0m', `Server running on port ${port} `);
});
