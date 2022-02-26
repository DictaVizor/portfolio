import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateWithoutUserInput } from "../inputs/TokenCreateWithoutUserInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class TokenCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: false
  })
  where!: TokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => TokenCreateWithoutUserInput, {
    nullable: false
  })
  create!: TokenCreateWithoutUserInput;
}
