import JWT from "passport-jwt";
import User from "../models/user.js";

const JWTStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "dkjfwu45843rhih34853hnft",
};

//validation of tokens
export const passportAuth = (passport) => {
  passport.use(
    new JWTStrategy(opts, async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload.id);
      if (!user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
  );
};
