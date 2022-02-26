import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateManyUserInputEnvelope } from "../inputs/TokenCreateManyUserInputEnvelope";
import { TokenCreateOrConnectWithoutUserInput } from "../inputs/TokenCreateOrConnectWithoutUserInput";
import { TokenCreateWithoutUserInput } from "../inputs/TokenCreateWithoutUserInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class TokenCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TokenCreateWithoutUserInput], {
    nullable: true
  })
  create?: TokenCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TokenCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TokenCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TokenCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  connect?: TokenWhereUniqueInput[] | undefined;
}
