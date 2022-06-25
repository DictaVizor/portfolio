import {User} from "@/prisma/generated/type-graphql"

declare module "fastify" {
    interface PassportUser extends User {}
} 