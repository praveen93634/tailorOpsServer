import mongoose from "mongoose";
require('dotenv').config()

// const mongooseOption={
//     autoIndex:false,
//     socketTimeoutMs:30000
// }
const connectDB = async (url: string) => {
  try {
    const conn = await mongoose.connect(url, {
      dbName: "superAdmin",
      autoIndex: false,
      socketTimeoutMS: 30000,
    });
    console.log("MongoDB connected");
    return conn;
  } catch (err) {
    console.error("DB connection failed:", err);
    throw err;
  }
};
export default connectDB;

