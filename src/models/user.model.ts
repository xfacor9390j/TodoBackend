import mongoose, { Schema } from "mongoose";
import { User } from "../utils/user.interface";

const userSchema: Schema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    userName: {
        type: String,
        unique: true,
       
    },
    email: {
        type: String,
        unique: true,
        
    },
    authtype: {
        type: String,
    },
    githubId: {
        type: String,
        required: true,
        uniquese: true,
        
    }
})

export const userDb = mongoose.model<User>('User', userSchema)



