const mongoose = require("mongoose");

async function connectDB() {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined");
        }

        const connection = await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");

        return connection;
    } catch (error) {
        console.error("Database connection failed:", error.message);
        throw error;
    }
}

module.exports = connectDB;