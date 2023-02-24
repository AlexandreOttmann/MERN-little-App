import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import { router } from './router/posts/router.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_DB, () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
