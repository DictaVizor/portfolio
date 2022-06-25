import {AnonymousAuthType} from "."


declare module "fastify" {
    interface FastifyInstance {
        anonymousAuth?: AnonymousAuthType
    }
}