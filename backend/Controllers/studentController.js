import { Student } from '../models/studentSchema.js';
import { handleValidationError } from '../middlewares/errorHandler.js';

export const createStudent = async (req, res, next) => {
    const { name, registrationNumber, grade } = req.body;

    try {
        if (!name || !registrationNumber || !grade) {
            return handleValidationError("Please fill the full form", 400);
        }
        await Student.create({ name, registrationNumber, grade });
        res.status(200).json({
            success: true,
            message: "Student Created!",
        });
    } catch (error) {
        next(error);
    }
};

export const getAllStudents = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            success: true,
            students,
        });
    } catch (error) {
        next(error);
    }
};