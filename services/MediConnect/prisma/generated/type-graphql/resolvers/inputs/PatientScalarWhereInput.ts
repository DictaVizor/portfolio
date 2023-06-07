import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumGenderFilter } from "../inputs/EnumGenderFilter";
import { EnumPatientStatusFilter } from "../inputs/EnumPatientStatusFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PatientScalarWhereInput", {
  isAbstract: true
})
export class PatientScalarWhereInput {
  @TypeGraphQL.Field(_type => [PatientScalarWhereInput], {
    nullable: true
  })
  AND?: PatientScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarWhereInput], {
    nullable: true
  })
  OR?: PatientScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarWhereInput], {
    nullable: true
  })
  NOT?: PatientScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  diagnosis?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPatientStatusFilter, {
    nullable: true
  })
  status?: EnumPatientStatusFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  age?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  doctorId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumGenderFilter, {
    nullable: true
  })
  gender?: EnumGenderFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  phoneNumber?: StringFilter | undefined;
}
