import { PrismaClient } from "@prisma/client"
import { PassportUser } from "fastify";

export type Context = {
    prisma: PrismaClient;
    user?: PassportUser;
}

export type AuthorizedContext = Omit<Context, 'user'> & Required<Pick<Context, 'user'>>