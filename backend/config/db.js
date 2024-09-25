const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {
        // console.log(process.env.MONGO_URI)
        // const conn = await mongoose.connect(process.env.MONGO_URI);
        const MONGO_URI = "mongodb://127.0.0.1:27017/talk-a-tive"
        const conn = await mongoose.connect(MONGO_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.bold);
        process.exit(1); // Exit with a non-zero status code to indicate an error
    }
};

module.exports = connectDB;

