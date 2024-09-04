import express, { Request, Response } from "express";
import router from "./router/index";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
const username = process.env.db_username;
const password = process.env.db_password;


export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: "https://todo-frontend-theta-one.vercel.app/home",
      credentials: true,
    })
  );
  app.use(express.json());
  app.options("*", cors());
  app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      cookie: {
        path: "/",
        secure: true,
        maxAge: 60000 * 60 * 24,
        httpOnly: true,
        sameSite: "none",
        
       
      },
      store: MongoStore.create({
        mongoUrl: `mongodb+srv://${username}:${password}@abhinay.yst3wid.mongodb.net/?retryWrites=true&w=majority&appName=abhinay`,
      }),
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(router);
  return app;
}
