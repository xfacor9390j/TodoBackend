import { Router } from "express";
import {getSessionStatus, getUserDetails, login,logout,redirect, rootUrl, status} from '../controllers/user.controller'
import '../Strategy/user.github.strat'
import passport from "passport";
const userRoute = Router();
userRoute.get('/', rootUrl)
userRoute.get('/api/auth/github', passport.authenticate('github'), login)
userRoute.get('/api/auth/github/redirect', passport.authenticate('github', { failureRedirect: 'https://todo-frontend-theta-one.vercel.app/',successRedirect: '/home' }), redirect)
userRoute.get('/api/auth/user', getUserDetails)
userRoute.get('/api/auth/logout', logout)
userRoute.get('/api/auth/status', status)
userRoute.get('/api/session', getSessionStatus)

export default userRoute
