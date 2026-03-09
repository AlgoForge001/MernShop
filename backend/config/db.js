const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/Shopping";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to database");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;