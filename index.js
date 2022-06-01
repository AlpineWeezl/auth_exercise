import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';
import { connectDB } from './db/client.js';
import { usersRouter } from './router/usersRouter.js';

// initialize express
const app = express();

// set port
const port = process.env.PORT || 5000;

// connect to MongoDB
connectDB();

// load CORS
app.use(cors());

// JSON Handler
app.use(json());

// main routes
app.use('/jwt', usersRouter);

// start server
app.listen(port, () => console.log(`listening on ${port}`));