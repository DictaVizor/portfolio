import { User } from "@prisma/generated/type-graphql";
import { AuthorizedContext, Context } from "@src/context";
import { Authorized, Ctx, Query, Resolver } from "type-graphql";

@Resolver()
class UserResolver {
    @Query(returns => User)
    @Authorized()
    async me(@Ctx() ctx: AuthorizedContext) {
        return ctx.prisma.user.findUnique({
            where: {id: ctx.user.id}
        })
    }
}