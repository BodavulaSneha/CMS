import express from 'express';
import { createBook, getAllBooks } from '../Controllers/libraryController.js';

const router = express.Router();

router.get('/getall', getAllBooks);
router.post('/', createBook);

export default router;