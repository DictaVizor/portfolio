import Fastify, { FastifyInstance, FastifyRegister, FastifyRegisterOptions } from "fastify"
import fastifyPassport from "fastify-passport"
import fastifyPrismaClient from "fastify-prisma-client"
import fasitfySecureSession from "fastify-secure-session"
import * as fs from "fs"
import { GraphQLSchema } from "graphql"
import mercurius from "mercurius"
import path from "path"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { resolvers } from "../prisma/generated/type-graphql"
import { jwtAuth } from "./passport"

const startApp  = async () => {
    const app = Fastify({
        logger: true
    })

    //passport
    app.register(fasitfySecureSession, {key: fs.readFileSync(path.join(__dirname, "secret-key"))})
    app.register(fastifyPassport.initialize())
    app.register(fastifyPassport.secureSession())
    fastifyPassport.use(jwtAuth())
    
    //easy access to prisma client
    app.register(fastifyPrismaClient, {})

    //graphql
    const schema = await buildSchema({
        resolvers: resolvers,
        dateScalarMode: "isoDate",
    })

    const graphiql = "graphiql"

    app.register(mercurius, {
        schema: schema,
        graphiql: graphiql,
        context: (request, reply) => ({
            prisma: request.prisma,
            user: request.user
        })
    })

    await app.listen(4000, (error, address) => {
        if(error) {
            app.log.error(error)
        }
    })

    console.log(`🚀 Graphql playground ready at http://localhost:4000${graphiql}`)
    
}

startApp()