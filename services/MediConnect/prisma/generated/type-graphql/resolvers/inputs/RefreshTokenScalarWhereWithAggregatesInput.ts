import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumTokenTypeWithAggregatesFilter } from "../inputs/EnumTokenTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("RefreshTokenScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RefreshTokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RefreshTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RefreshTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RefreshTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTokenTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumTokenTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  token?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  valid?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  expiration?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;
}
