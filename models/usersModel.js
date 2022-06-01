import mongoose from 'mongoose';


const usersSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            max: 127,
            min: 1
        },
        email:
        {
            type: String,
            max: 255,
            required: true
        },
        password: {
            type: String,
            min: 8,
            max: 2047,
            required: true
        },
        admin: {
            type: Boolean,
            value: true
        },
        created_at: {
            type: Date,
            value: Date.now
        }
    }
);

export default mongoose.model('Users', usersSchema);