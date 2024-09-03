import passport from "passport";
import 'dotenv/config'
import {Strategy as githubStrategy, Profile} from 'passport-github2'
// import {Strategy as githubStrategy, Profile} from 'passport-github'
import { userDb } from "../models/user.model";
import { User } from "../utils/user.interface";

const clientId=process.env.clientId;
const clientSecret = process.env.clientSecret;
const redirectUri = process.env.callBackUrl;
if (!clientId || !clientSecret || !redirectUri) {
    throw new Error("Environment variables CLIENT_ID, CLIENT_SECRET, and CALLBACK_URL must be defined");
}
passport.serializeUser((user: any, done) => {
    done(null,  user._id )
})
passport.deserializeUser(async (_id: string, done) => {
    try {
        const user = await userDb.findById(_id);
        done(null, user);  
    } catch (err) {
        done(err);
    }
});

export const pass=passport.use(new githubStrategy({
    clientID: clientId,
    clientSecret: clientSecret,
    callbackURL: redirectUri   
}, async function (accessToken: string, refreshToken: string, profile: Profile, done: any) {
    const userProfile = profile as Profile & { _json: { email?: string } };
    const email = userProfile._json.email;
    let findUser;
    try {
        findUser = await userDb.findOne({ githubId: profile.id })
        
    } catch (err) {
        return done(err)
    }
    try {
        if (!findUser) {
            const newUser= new userDb({
                userName: profile.displayName,
                email: email,
                authtype: 'github',
                githubId: profile.id
            })
            const savedUser = await newUser.save();
            return done(null, newUser)
            
        }
        return done(null, findUser)
    } catch (err) {
        return done(err)

    }

}))