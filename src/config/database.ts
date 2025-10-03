import mongoose from "mongoose";
require('dotenv').config()


const connectDB = async (url: string) => {
  try {
    const conn = await mongoose.connect(url, {
      autoIndex: false,
      socketTimeoutMS: 30000,
    });
    console.log("Main MongoDB connected");
    return conn;
  } catch (err) {
    console.error("DB connection failed:", err);
    throw err;
  }
};
export default connectDB;

