import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from "./routers/routers.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: '10gb' }));
app.use(express.urlencoded({ limit: '10gb', extended: true }));
app.use('/uploads', express.static('uploads'));
    
// CORS setup should come before the router
app.use(cors({
    origin: 'http://localhost:3000',  // Only allow requests from your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
}));

// Mount the router after setting up CORS
app.use(router);

const PORT = process.env.PORT || 5000;
const dbUrl = process.env.DATABASE_URL;

const connectMongoose = async () => {
    await mongoose.connect(dbUrl)
        .then(() => app.listen(PORT, () => console.log('Successfully connected to mongoose and listening on port', PORT)))
        .catch((error) => console.log(error.message));
};

connectMongoose();
