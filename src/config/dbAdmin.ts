import connectDB from './database';
import mongoose from "mongoose";
require('dotenv').config()
const url = process.env.DB_URL + "/mongodbcluster";

let db;

const tenentSchema=new mongoose.Schema({
    id:String,
    name:String
},{timestamps:true})
const tenentModel=mongoose.model("tenents",tenentSchema)

const getDb = async () => {
    return db ? db : await connectDB(url)
}


export const getTenentModel=async()=>{
    const adminDb = await getDb();
    return adminDb.model("tenants", tenentSchema)
}
