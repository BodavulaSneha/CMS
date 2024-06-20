import { Book } from '../models/LibrarySchema.js';
import { handleValidationError } from '../middlewares/errorHandler.js';

export const createBook = async (req, res, next) => {
    console.log(req.body)
    const {bookname, author} = req.body;

    try {
        if (!bookname || !author) {
            return handleValidationError("Please fill the full form", 400);
        }
        await Book.create({ events});
        res.status(200).json({
            success: true,
            message: "A new Book is Created!",
        });
    } catch (error) {
        next(error);
    }
};

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            success: true,
            books,
        });
    } catch (error) {
        next(error);}
};