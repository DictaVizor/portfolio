import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateWithoutUserInput } from "../inputs/TokenCreateWithoutUserInput";
import { TokenUpdateWithoutUserInput } from "../inputs/TokenUpdateWithoutUserInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class TokenUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: false
  })
  where!: TokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => TokenUpdateWithoutUserInput, {
    nullable: false
  })
  update!: TokenUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => TokenCreateWithoutUserInput, {
    nullable: false
  })
  create!: TokenCreateWithoutUserInput;
}
