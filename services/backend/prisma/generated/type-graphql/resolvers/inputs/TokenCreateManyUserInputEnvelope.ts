import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateManyUserInput } from "../inputs/TokenCreateManyUserInput";

@TypeGraphQL.InputType("TokenCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class TokenCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [TokenCreateManyUserInput], {
    nullable: false
  })
  data!: TokenCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
