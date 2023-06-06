import dotenv from 'dotenv'
import Fastify, { FastifyInstance, FastifyRegister, FastifyRegisterOptions } from "fastify"
import fastifyPassport from "@fastify/passport"
import fasitfySecureSession from "@fastify/secure-session"
import * as fs from "fs"
import {prismaPlugin} from "./plugins"
import { GraphQLSchema } from "graphql"
import mercurius from "mercurius"
import path from "path"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { resolvers } from "../prisma/generated/type-graphql"
import { jwtAuth } from "./passport"



dotenv.config({path: path.resolve(__dirname, '..', '.env')})

const startApp  = async () => {
    const app = Fastify({
        logger: true
    })

    console.log(process.env.COOKIE_KEY)

    //passport
    app.register(fasitfySecureSession, {
        key: Buffer.from(process.env.COOKIE_KEY!, 'hex')
    })
    app.register(fastifyPassport.initialize())
    app.register(fastifyPassport.secureSession())
    fastifyPassport.use(jwtAuth())
    
    // Enables context access to prisma
    app.register(prismaPlugin)

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

    try {
        await app.listen({port: 4000})
    } catch(error) {
        app.log.error(error)
        process.exit(1)
    }

    console.log(`🚀 Graphql playground ready at http://localhost:4000${graphiql}`)
    
}

startApp()