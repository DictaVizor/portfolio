import {Strategy as JwtStrategy, ExtractJwt, VerifyCallbackWithRequest} from "passport-jwt"
import { Context } from "@/src/context"
import jwt from "jsonwebtoken"

export const jwtAuth = (): JwtStrategy => {

    const verify: VerifyCallbackWithRequest = (request, payload, done) => {
        try {
            //cast request as the actual context since it uses express Request Type 
            const user = (request as unknown as Context).prisma.user.findUnique({
                where: {
                    id: payload.sub
                }
            })

            if(user){
                return done(null, user)
            }
            return done(null, false)
        } catch(error) {
            return done(null, error)
        }

    }



    return new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: process.env.JWT_AUTH_SECRET,
        passReqToCallback: true,
    }, verify)
}