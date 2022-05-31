import mongoose, { Schema } from 'mongoose';


const usersSchema = new Schema(
    {
        username: {
            type: string,
            max: 127,
            min: 1
        },
        email:
        {
            type: string,
            max: 255,
            required: true
        },
        password: {
            type: string,
            min: 8,
            max: 2047,
            required: true
        },
        admin: {
            type: boolean,
            value: true
        },
        created_at: {
            type: Date,
            value: Date.now
        }
    }
);

export default mongoose.model('Users', usersSchema);