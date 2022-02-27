import * as TypeGraphQL from "type-graphql";
import { RefreshToken } from "../../../models/RefreshToken";
import { User } from "../../../models/User";
import { UserTokensArgs } from "./args/UserTokensArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [RefreshToken], {
    nullable: false
  })
  async tokens(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTokensArgs): Promise<RefreshToken[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).tokens(args);
  }
}
