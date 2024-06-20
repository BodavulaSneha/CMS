import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "MERN_SCHOOL_MANAGEMENT_SYSTEM"
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.error("Error occurred while connecting to database:", error.message);
        process.exit(1); // Exit process with failure
    });
};