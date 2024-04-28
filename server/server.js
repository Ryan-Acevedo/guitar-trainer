import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/practiceplan.routes.js';

const app = express();

// CROSS-ORIGIN REQUESTS
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use('/api', router);

dotenv.config();

dbConnect();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});