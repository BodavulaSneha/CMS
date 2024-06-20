import { Teachers } from '../models/teacherSchema.js';
import { handleValidationError } from '../middlewares/errorHandler.js';

export const createTeachers = async (req, res, next) => {
    const { name, email, subject } = req.body;

    try {
        if (!name || !email || !subject) {
            return handleValidationError("Please fill the full form", 400);
        }
        await Teachers.create({ name, email, subject });
        res.status(200).json({
            success: true,
            message: "Teacher is Created!",
        });
    } catch (error) {
        next(error);
    }
};

export const getAllTeachers = async (req, res, next) => {
    try {
        const teachers = await Teachers.find();
        res.status(200).json({
            success: true,
            teachers,
        });
    } catch (error) {
        next(error);
    }
};