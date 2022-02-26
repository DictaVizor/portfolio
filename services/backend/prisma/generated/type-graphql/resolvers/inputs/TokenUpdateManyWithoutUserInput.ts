import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenCreateManyUserInputEnvelope } from "../inputs/TokenCreateManyUserInputEnvelope";
import { TokenCreateOrConnectWithoutUserInput } from "../inputs/TokenCreateOrConnectWithoutUserInput";
import { TokenCreateWithoutUserInput } from "../inputs/TokenCreateWithoutUserInput";
import { TokenScalarWhereInput } from "../inputs/TokenScalarWhereInput";
import { TokenUpdateManyWithWhereWithoutUserInput } from "../inputs/TokenUpdateManyWithWhereWithoutUserInput";
import { TokenUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TokenUpdateWithWhereUniqueWithoutUserInput";
import { TokenUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TokenUpsertWithWhereUniqueWithoutUserInput";
import { TokenWhereUniqueInput } from "../inputs/TokenWhereUniqueInput";

@TypeGraphQL.InputType("TokenUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class TokenUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TokenCreateWithoutUserInput], {
    nullable: true
  })
  create?: TokenCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TokenCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: TokenUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TokenCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TokenCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  set?: TokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  delete?: TokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereUniqueInput], {
    nullable: true
  })
  connect?: TokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: TokenUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: TokenUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TokenScalarWhereInput[] | undefined;
}
