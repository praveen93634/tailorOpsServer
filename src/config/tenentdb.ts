import connectDB from './database'
const mongoose = require('mongoose');
require('dotenv').config()
const url = process.env.DB_URL;
console.log(url);

let db;
const customerSchema = new mongoose.Schema({
    customerName: String
}, { timestamps: true })

const customerModel = mongoose.model("customers", customerSchema)

const getTenantDB = async (tenantId) => {
    const dbName = `tenant-${tenantId}`;
    db = db ? db : await connectDB(url)
    let tenantDb = db.useDb(dbName, { useCache: true });
    return tenantDb;
}

export const getCustomerModel = async (tenantId) => {
    const tenantDb = await getTenantDB(tenantId);
    return tenantDb.model("customers", customerSchema)
}
