import express from 'express';
import { createClass, getAllClasses } from '../Controllers/classController.js';

const router = express.Router();

router.get('/getall', getAllClasses);
router.post('/create', createClass);

export default router;