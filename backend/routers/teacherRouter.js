import express from 'express';
import { createTeachers, getAllTeachers } from '../Controllers/teacherController.js';

const router = express.Router();

router.get('/getall', getAllTeachers);
router.post('/', createTeachers);

export default router;