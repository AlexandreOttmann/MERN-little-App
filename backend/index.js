import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import Post from './models/postModel.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_DB, () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/v2/postlist', async (req, res) => {
  try {
    const post = await Post.find({});
    if (!post) {
      return res.status(404).json('Post not found');
    }
    return res.status(201).json(post);
  } catch (err) {
    return res.status(500).json('Server error');
  }
});

app.get('/v2/post/:id', async (req, res) => {
	const params = req.params.id
  try {
    const post = await Post.findOne({_id: params});
    if (!post) {
      return res.status(404).json('Post not found');
    }
    return res.status(201).json(post);
  } catch (err) {
    return res.status(500).json('Server error');
  }
});

app.delete('/v2/post/:id', async (req, res) => {
	
	try {
		const post = await Post.findByIdAndRemove(req.params.id);
		if (!post) {
      return res.status(404).json('Not found');
    }
    return res.status(201).json('Post deleted');
	}
	catch (err) {
    return res.status(500).json('Server error');
  }
})

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
