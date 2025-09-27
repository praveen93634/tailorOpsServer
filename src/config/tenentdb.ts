import connectDB from './database'
const mongoose = require('mongoose');
require('dotenv').config()
const url = process.env.DB_URL;
let db;


export const getTenantDB = async (tenantId) => {
    const dbName = `tenant-${tenantId}`;
    db = db ? db : await connectDB(url)
    let tenantDb = db.useDb(dbName, { useCache: true });
    return tenantDb;
}

