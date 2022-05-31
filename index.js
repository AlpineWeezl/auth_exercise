import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './db/client.js';

// initialize express
const app = express();

// set port
const port = process.env.PORT || 5000;

// connect to MongoDB
connectDB();

// load CORS
app.use(cors());

// start server
app.listen(port, () => console.log(`listening on ${port}`));