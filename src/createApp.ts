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
      origin: "https://todo-frontend-theta-one.vercel.app",
      credentials: true,
    })
  );
  console.log("hello world!")
  app.use(express.json());
  app.options("*", cors());
  app.use(
    session({
      secret: "new password for the production!!!",
      resave: false,
      saveUninitialized: false,
      cookie: {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: "none",
        secure: true,
        httpOnly: true,
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
