import { Exams } from '../models/examSchema.js';
import { handleValidationError } from '../middlewares/errorHandler.js';

export const addExam = async (req, res, next) => {
    const { name, registrationNumber, className, marks } = req.body;

    try {
        if (!name || !registrationNumber || !className || !marks) {
            return handleValidationError("Please fill the full form", 400);
        }
        await Exams.create({ name, registrationNumber, className, marks });
        res.status(200).json({
            success: true,
            message: "A new exam has been Created!",
        });
    } catch (error) {
        next(error);
    }
};

export const getAllExams = async (req, res, next) => {
    try {
        const exams = await Exams.find();
        res.status(200).json({
            success: true,
            exams,
        });
    } catch (error) {
        next(error);
    }
};