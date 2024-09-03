import mongoose from "mongoose";
import 'dotenv/config'
const username = process.env.db_username;
const password = process.env.db_password;

const mongo_url=`mongodb+srv://${username}:${password}@abhinay.yst3wid.mongodb.net/?retryWrites=true&w=majority&appName=abhinay`;
mongoose.connection.once('open', () => {    
    console.log('connected to db');
})  
mongoose.connection.on('error', (err) => {
    console.log('error:', err);
})
export default async function dbConnect() {
    await mongoose.connect(mongo_url)  
}