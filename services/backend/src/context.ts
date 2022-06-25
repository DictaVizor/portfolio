import { PrismaClient } from "@prisma/client"
import { PassportUser, FastifyRequest } from "fastify";

export type Context = FastifyRequest & {
    prisma: PrismaClient;
    user?: PassportUser;
}