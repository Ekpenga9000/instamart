const dotenv = require("dotenv"); 
const mongoose = require("mongoose");

dotenv.config();

const connectToDB = async () => {
    const uri = process.env.MONGODB_URI;

    if (mongoose.connection.readyState >= 1) return;

    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("MongoDB Error", error);
    }
}; 

module.exports = connectToDB;