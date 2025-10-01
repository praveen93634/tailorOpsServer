import mongoose from 'mongoose';
import connectDB from './database'
// const mongoose = require('mongoose');
require('dotenv').config()
const connections: Record<number, mongoose.Connection> = {};

export const getTenantDB = async (tenantId: number) => {
  if (connections[tenantId]) return connections[tenantId];
  const dbName = `tenant-${tenantId}`;
  const conn = await mongoose.createConnection(`${process.env.DB_URL}/${dbName}?retryWrites=true&w=majority`);
  connections[tenantId] = conn;
  return conn;
};
