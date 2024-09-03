
import mongoose, { Schema } from "mongoose";
import { Todo } from "../utils/todo.interface";


const defaultDeadline = () => {
    const now = new Date();
    return new Date(now.getTime() + 24 * 60 * 60 * 1000);  // Adds 24 hours
};
const todoSchema:Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
        
    },
    userId: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        default: defaultDeadline,
        
    }
})

export const todoDb = mongoose.model<Todo>('Todo', todoSchema)