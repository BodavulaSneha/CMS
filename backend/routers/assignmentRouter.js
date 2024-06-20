import express from 'express';
import {createAssignment, getAllAssignments  } from '../Controllers/assignmentController.js';

const router = express.Router();

router.get('/getall', getAllAssignments);
router.post('/', createAssignment);

export default router;