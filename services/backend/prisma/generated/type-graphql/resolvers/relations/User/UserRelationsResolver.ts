import * as TypeGraphQL from "type-graphql";
import { Token } from "../../../models/Token";
import { User } from "../../../models/User";
import { UserTokensArgs } from "./args/UserTokensArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Token], {
    nullable: false
  })
  async tokens(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTokensArgs): Promise<Token[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).tokens(args);
  }
}
