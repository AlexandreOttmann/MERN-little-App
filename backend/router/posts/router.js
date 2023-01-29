import express from 'express';
export const router = express.Router();

router.get('/coucou', (req, res) => { res.send('coucou') })

router.get('/v2/allposts')
router.post('v2/post')
router.get('/v2/post/:id')
router.put('/v2/post/:id')
router.delete('/v2/post/:id')
