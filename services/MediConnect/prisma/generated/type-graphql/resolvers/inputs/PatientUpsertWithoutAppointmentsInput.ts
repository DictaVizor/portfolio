import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateWithoutAppointmentsInput } from "../inputs/PatientCreateWithoutAppointmentsInput";
import { PatientUpdateWithoutAppointmentsInput } from "../inputs/PatientUpdateWithoutAppointmentsInput";

@TypeGraphQL.InputType("PatientUpsertWithoutAppointmentsInput", {
  isAbstract: true
})
export class PatientUpsertWithoutAppointmentsInput {
  @TypeGraphQL.Field(_type => PatientUpdateWithoutAppointmentsInput, {
    nullable: false
  })
  update!: PatientUpdateWithoutAppointmentsInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutAppointmentsInput, {
    nullable: false
  })
  create!: PatientCreateWithoutAppointmentsInput;
}
