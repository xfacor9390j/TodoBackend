import express, { Request, Response } from "express";
import router from "./router/index";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
const username = process.env.db_username;
const password = process.env.db_password;

// Define the CORS middleware
const allowCors = (fn: (req: Request, res: Response) => Promise<void> | void) => async (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');  // Use 'true' as a string

  const allowedOrigins = ['https://todo-frontend-theta-one.vercel.app'];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin || '')) {
    res.setHeader('Access-Control-Allow-Origin', origin || '');
  } else {
    res.setHeader('Access-Control-Allow-Origin', '');
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  return await fn(req, res);
};

export function createApp() {
  const app = express();

  // Apply CORS middleware
  app.use(allowCors(async (req: Request, res: Response) => {
    // Place additional route handling logic here if needed
  }));

  app.use(express.json());

  // Apply session middleware
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
        domain: '.vercel.app',
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
