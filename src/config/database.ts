import mongoose from "mongoose";
require('dotenv').config()

const mongooseOption={
    autoIndex:false,
    socketTimeoutMs:30000
}
const connectDB=async(url)=>{
    console.log(url)
    return new Promise(async (resolve,reject)=>{
        const connection= await mongoose.createConnection(url,mongooseOption).asPromise();
        resolve(connection)
    }).catch((err:any)=>{
        console.log(err)
    })
}
export default connectDB;

