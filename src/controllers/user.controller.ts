import { mockUsers } from './../utils/users.db';
import { NextFunction, Request, Response } from "express";
import { User } from '../utils/user.interface'
import session from 'express-session';

// Extend the session interface to include custom properties
declare module 'express-session' {
    interface SessionData {
        visited?: boolean;  // Add custom property 'visited'
        githubId?: string;  // Add custom property 'githubId'
        user?: User;
    }
}
export function rootUrl(req: Request, res: Response) {
    req.session.visited = true;
    // res.cookie('backendCookie', 'abhinay',{
    //     secure: true,
    //     maxAge: 60000 * 60 * 24,
    //     httpOnly: true,
    //     sameSite: 'none',
    //     partitioned: true,
    // })
    res.status(200).json(req.session.visited);
}
export function login(req: Request, res: Response) {
    res.status(200).json('logged in!')
 }
 
 export function redirect(req: Request, res: Response) { 
     if (req.session) {
         req.session.user = req.user as User;
     }
     return res.redirect('https://todo-frontend-theta-one.vercel.app/home');
    //  res.status(200).json('redirected') 
}
export function getUserDetails(req: Request, res: Response) {
    if (req.session && req.session.user) {
        res.status(200).json(req.session.user);
        console.log(req.session.user)
    } else {
      res.status(401).json({ message: 'Not authenticated' });
    }
  }
export function logout(req: Request, res: Response, next: NextFunction) {
    if (!req.user) return res.sendStatus(401);
	req.logOut((err) => {
		if (err) return res.sendStatus(400);
		res.sendStatus(200);
	});
}


export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    if (req.user) {
        return next(); 
    } else {
        return res.status(401).json({ message: 'Unauthorized: User is not authenticated' });
    }
}



export function status(req: Request, res: Response) { 
    if (req.user) {
        return res.status(200).json(true);
    } else {
        return res.status(401).json(false); 
    }
}









