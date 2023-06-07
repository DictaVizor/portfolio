import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTokenTypeFilter } from "../inputs/EnumTokenTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("RefreshTokenScalarWhereInput", {
  isAbstract: true
})
export class RefreshTokenScalarWhereInput {
  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereInput], {
    nullable: true
  })
  AND?: RefreshTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereInput], {
    nullable: true
  })
  OR?: RefreshTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereInput], {
    nullable: true
  })
  NOT?: RefreshTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTokenTypeFilter, {
    nullable: true
  })
  type?: EnumTokenTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  token?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  valid?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expiration?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;
}
