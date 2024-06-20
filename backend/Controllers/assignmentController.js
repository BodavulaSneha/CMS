import { Assignment } from '../models/assignmentSchema.js';
import { handleValidationError } from '../middlewares/errorHandler.js';

export const createAssignment = async (req, res, next) => {
    const {title,description,grade,deadline} = req.body;

    try {
        if (!title|| !description || !grade || !deadline) {
            return handleValidationError("Please fill the full form", 400);
        }
        await Assignment.create({ title,description,grade ,deadline});
        res.status(200).json({
            success: true,
            message: "Assignment is Created!",
        });
    } catch (error) {
        next(error);
    }
};

export const getAllAssignments = async (req, res, next) => {
    try {
        const assignments = await Assignment.find();
        res.status(200).json({
            success: true,
            assignments,
        });
    } catch (error) {
        next(error);
    }
};