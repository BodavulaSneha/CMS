import mongoose from 'mongoose';
import validator from 'validator';

const attendanceSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    Status: {
        type: String,
        enum: ["Present","Absent","Absent with Apology"],
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
});

export const Attendance = mongoose.model('Attendance', attendanceSchema);