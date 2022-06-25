import Fastify, { fastify } from "fastify"
import fastifyPassport from "fastify-passport"
import fasitfySecureSession from "fastify-secure-session"
import * as fs from "fs"
import mercurius from "mercurius"
import path from "path"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { resolvers } from "@/prisma/generated/type-graphql"
import { customResolvers } from "@/src/graphql/resolvers"
import process from "process"
import { jwtAuth } from "./passport"
import {Strategy as AnonymousStrategy} from "passport-anonymous"
import {prisma} from "./prismaClient"
import {fastifyPrismaClient} from "@/src/plugins"



const startApp  = async () => {
    const app = Fastify({
        logger: {
            level: "info",
            prettyPrint: process.env.NODE_ENV === "development" ? {
                ignore: "pid,hostname"
            } : false,
            
        }
    })

    //auth
    app.register(fasitfySecureSession, {key: fs.readFileSync(path.join(process.cwd(), "secret-key"))})
    app.register(fastifyPassport.initialize())
    app.register(fastifyPassport.secureSession())
    fastifyPassport.use(jwtAuth())
    fastifyPassport.use(new AnonymousStrategy())

    app.addHook("preValidation", fastifyPassport.authenticate(["jwt", "anonymous"], {session: false}))


    //easy access to prisma client
    app.register(fastifyPrismaClient, prisma)

    //graphql
    const schema = await buildSchema({
        resolvers: [...resolvers, ...customResolvers],
        dateScalarMode: "isoDate",
    })

    const graphiql = "graphiql"
 
    app.register(mercurius, {
        schema: schema,
        graphiql: graphiql,
        context: (request, reply) => request
    })


    await app.ready()

    await app.listen(process.env.PORT || 4000, (error, address) => {
        if(error) {
            app.log.error(error)
        }
    })


    console.log(`🚀 Graphql playground ready at http://localhost:4000/${graphiql}`)
    
}

startApp()