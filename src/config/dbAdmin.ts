import { tenentSchema } from '../model/tenant';
import connectDB from './database';
import mongoose from "mongoose";
require('dotenv').config()
const url = process.env.DB_URL + "/TenentDb";

let db;

const getDb = async () => {
    return db ? db : await connectDB(url)
}


export const getTenentModel=async()=>{
    const adminDb = await getDb();
    return adminDb.model("tenants", tenentSchema)
}
