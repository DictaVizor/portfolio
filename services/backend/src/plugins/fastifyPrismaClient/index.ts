import { PrismaClient } from "@prisma/client";
import { FastifyPluginCallback } from "fastify";
import fp from "fastify-plugin"

const prismaClient: FastifyPluginCallback<PrismaClient> = async (fastify, prisma, next) => {
    if(fastify.prisma) {
        return next(new Error("fastify-prisma-client has been defined before"))
    }

    await prisma.$connect()

    fastify.decorate("prisma", prisma)
    fastify.decorateRequest("prisma", fastify.prisma)
    fastify.addHook("onClose", async (fastify, done) => {
        await fastify.prisma.$disconnect()
        done()
    })

    next()
}

const fastifyPrismaClient = fp(prismaClient, {
    name: "fastify-prisma-client",
    fastify: "3.x"
})

export default fastifyPrismaClient;