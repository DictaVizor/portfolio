import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumTokenTypeWithAggregatesFilter } from "../inputs/EnumTokenTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("TokenScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TokenScalarWhereWithAggregatesInput[] | undefined;

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
  emailToken?: StringNullableWithAggregatesFilter | undefined;

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
