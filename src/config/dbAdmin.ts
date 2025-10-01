import { customerSchema } from '../model/customer';
import { usershema } from '../model/user.model';
import connectDB from './database';
import mongoose from "mongoose";
require('dotenv').config()
const url = `${process.env.DB_URL}/superAdmin?retryWrites=true&w=majority&appName=Cluster0`;
console.log(url)
let db;

const getDb = async () => {
    return db ? db : await connectDB(url)
}

export const getTenentModel=async()=>{
    const adminDb = await getDb();
    return adminDb.model("User", usershema)
}
