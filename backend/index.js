import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import Post from './models/postModel.js';
import {router} from './router/posts/router.js'

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(router)

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_DB, () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.put('/v2/post/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body);
    if (!post) {
      return res.status(404).json('Not found');
    }
    return res.status(201).json('Post updated');
  } catch (err) {
    return res.status(500).json('Server error');
  }
});

app.post('/v2/post', async (req, res) => {
  const dbPosts = req.body;
  try {
    const post = await Post.create(dbPosts);
    if (!post) {
      return res.status(404).json('Post not dound');
    }
    return res.status(201).json(post);
  } catch (err) {
    return res.status(500).send('Server error', err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
