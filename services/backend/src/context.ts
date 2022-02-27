import { PrismaClient } from "@prisma/client"
import { PassportUser } from "fastify";

export type Context = {
    prisma: PrismaClient;
    user?: PassportUser;
}