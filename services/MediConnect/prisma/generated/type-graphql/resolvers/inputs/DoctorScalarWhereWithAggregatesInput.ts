import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("DoctorScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class DoctorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DoctorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DoctorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DoctorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DoctorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  specialty?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;
}
