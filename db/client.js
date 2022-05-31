import mongoose from 'mongoose';

export const connectDB = async () => {
    mongoose
        .connect(process.env.MONGODB_CONNECTION)
        .then(conn => console.log('MongoDB connection established'))
        .catch(err => console.error(err));
}