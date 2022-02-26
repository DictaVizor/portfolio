import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenUpdateWithoutUserInput } from "../inputs/TokenUpdateWithoutUserInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class TokenUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TokenWhereUniqueInput, {
    nullable: false
  })
  where!: TokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => TokenUpdateWithoutUserInput, {
    nullable: false
  })
  data!: TokenUpdateWithoutUserInput;
}
