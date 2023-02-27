import express from 'express';


import memberController from '../../controllers/memberController.js';

export const router = express.Router();

router.get('/', memberController.findAndDisplayAll);
router.post('/create', memberController.addMember);
router.delete('/delete/:id', memberController.deleteMember);
// 