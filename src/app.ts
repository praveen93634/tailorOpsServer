require("dotenv").config(); 
import express from 'express';
import connectDB from './config/database';
import route from './routes/index';
import cors from 'cors'
import { getTenentModel } from './config/dbAdmin';
import {response} from './helper/commenrespons'
import path from 'path';
const app = express();
const url = `${process.env.DB_URL}/superAdmin?retryWrites=true&w=majority&appName=Cluster0`;



// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});
app.use(cors({
    origin:process.env.FrontEnd_BaseUrl,
    Credential:true
}))
app.use('/', route);

const PORT = process.env.PORT || 3000;

connectDB(url)
    .then(() => {
        console.log("✅ Connected to DB");
        app.listen(process.env.PORT, () => {
            console.log("🚀 Server started");
        });
    })
    .catch((err) => {
        console.error("❌ DB connection failed:", err);
    });

