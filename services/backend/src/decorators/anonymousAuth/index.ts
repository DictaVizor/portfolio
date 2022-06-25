import { FastifyInstance, FastifyPluginAsync, FastifyPluginCallback, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";

import fp from "fastify-plugin"


export type AnonymousAuthType = (request: FastifyRequest, reply: FastifyReply, done: (error?: Error) => void) => void


const anonymousAuth: AnonymousAuthType = (request, _, done): void => {
    if(request?.headers?.authorization) {
        return done(Error("not anonymous"))
    }
    return done()
}

function anonymousAuthPlugin (fastify: FastifyInstance, _: FastifyPluginOptions, done: (error?: Error) => void){
    fastify.decorate("anonymousAuth", anonymousAuth)
    done()
}

export default fp(anonymousAuthPlugin, {
    fastify: "3.x",
    name: "anonymous-auth-plugin"
})