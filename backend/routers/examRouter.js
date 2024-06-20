import express from 'express';
import { addExam, getAllExams } from '../Controllers/examController.js';

const router = express.Router();

router.get('/getall', getAllExams);
router.post('/', addExam);

export default router;