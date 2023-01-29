import express from 'express';

import postController from '../../controllers/postController.js';

export const router = express.Router();

router.get('/v2/allposts', postController.getAllPosts )
router.post('/v2/post', postController.addPost)
router.get('/v2/post/:id', postController.getPostById)
router.put('/v2/post/:id', postController.updatePostById)
router.delete('/v2/post/:id', postController.deletePostById)
