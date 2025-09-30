import connectDB from './database'
const mongoose = require('mongoose');
require('dotenv').config()
let db;


export const getTenantDB = async (tenantId) => {
    const dbName = `tenant-${tenantId}`;
    db = db ? db : await connectDB(`${process.env.DB_URL}/${dbName}?retryWrites=true&w=majority`)
    let tenantDb = db.useDb(dbName, { useCache: true });
    return tenantDb;
}

