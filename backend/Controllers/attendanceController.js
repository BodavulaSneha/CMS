import { Attendance } from '../models/attendanceSchema.js';
import { handleValidationError } from '../middlewares/errorHandler.js';


export const createAttendance = async (req, res, next) => {
    const { attendanceData } = req.body;

    try {
        if (!attendanceData || !Array.isArray(attendanceData) || attendanceData.length === 0) {
            return res.status(400).json(handleValidationError("Attendance data is missing or invalid"));
        }

        const attendanceRecords = await Promise.all(attendanceData.map(async (record) => {
            const { student, status } = record;
            return await Attendance.create({ student, status });
        }));

        res.status(200).json({
            success: true,
            message: "Attendance Marked Successfully",
            attendanceRecords
        });
    } catch (error) {
        next(error);
    }
};

export const getAllAttendance = async (req, res, next) => {
    try {
        const attendanceRecords = await Attendance.find().populate("student", "name registrationNumber grade");
        res.status(200).json({
            success: true,
            attendanceRecords,
        });
    } catch (error) {
        next(error);
    }
};

