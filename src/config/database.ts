import mongoose from "mongoose";
require('dotenv').config()

const mongooseOption={
    useNewUrlParser:true,
    useUnifiedTopology:true,
    autoIndex:true,
    connectTimeoutMs:10000,
    socketTimeoutMs:30000
}
const connectDB=async(url)=>{
    return new Promise(async (resolve,reject)=>{
        const connection= await mongoose.createConnection(url,mongooseOption).asPromise();
        resolve(connection)
    })
}
export default connectDB;

