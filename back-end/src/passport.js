import passport from "passport";
import passportJWT from "passport-jwt";
import { db } from "./db.js";
import dotenv from "dotenv";
dotenv.config();

passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      const user = db.query(`SELECT * FROM users WHERE id = ?`, payload.id);
      try {
        return user ? done(null, user) : done(new Error("User not found"));
      } catch (error) {
        done(error);
      }
    }
  )
);
