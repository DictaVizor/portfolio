import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumGenderWithAggregatesFilter } from "../inputs/EnumGenderWithAggregatesFilter";
import { EnumPatientStatusWithAggregatesFilter } from "../inputs/EnumPatientStatusWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PatientScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PatientScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PatientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PatientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PatientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PatientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  diagnosis?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPatientStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumPatientStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  firstName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  lastName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  age?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  doctorId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumGenderWithAggregatesFilter, {
    nullable: true
  })
  gender?: EnumGenderWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  notes?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  phoneNumber?: StringWithAggregatesFilter | undefined;
}
