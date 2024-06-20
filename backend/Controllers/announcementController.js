import { Announcement } from '../models/announcementSchema.js';
import { handleValidationError } from '../middlewares/errorHandler.js';

export const createAnnouncement = async (req, res, next) => {
    const { announcement } = req.body;

    try {
        if (!announcement) {
            return handleValidationError("Please fill the full form", 400);
        }
        await Student.create({ Announcement });
        res.status(200).json({
            success: true,
            message: "Announcement is Created!",
        });
    } catch (error) {
        next(error);
    }
};

export const getAllAnnouncements = async (req, res, next) => {
    try {
        const announcements = await Announcement.find();
        res.status(200).json({
            success: true,
            announcements,
        });
    } catch (error) {
        next(error);
    }
};