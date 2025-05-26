import express from 'express';
import connectDB from './config/database';
import route from './routes/index';

const app = express();

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});
app.use('/', route);
connectDB()
    .then(() => {
        console.log("✅ Connected to DB");
        app.listen(process.env.PORT, () => {
            console.log("🚀 Server started");
        });
    })
    .catch((err) => {
        console.error("❌ DB connection failed:", err);
    });
