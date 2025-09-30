import express from 'express';
import connectDB from './config/database';
import route from './routes/index';
import cors from 'cors'
// import getTenantModel from './config/dbAdmin'
import { getTenentModel } from './config/dbAdmin';
import {response} from './helper/commenrespons'
const app = express();

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

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
