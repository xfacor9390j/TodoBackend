import express, { Request,Response } from "express";
import router from './src/router/index'
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from 'cors'
const username = process.env.db_username;
const password = process.env.db_password;
const app = express();

export  function createApp() {
    const app = express();


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 60000 * 60 * 24 },
    store:  MongoStore.create({
        mongoUrl:`mongodb+srv://${username}:${password}@abhinay.yst3wid.mongodb.net/?retryWrites=true&w=majority&appName=abhinay`
    })
}))
app.use(passport.initialize());
app.use(passport.session())
    app.use(router);
    return app;

    
}