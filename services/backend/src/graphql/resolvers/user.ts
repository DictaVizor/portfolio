import { User } from "@prisma/generated/type-graphql";
import { Ctx, Query, Resolver } from "type-graphql";

@Resolver()
class UserResolver {
    @Query(returns => User)
    async me(@Ctx() ctx: Context) {
        
    }
}