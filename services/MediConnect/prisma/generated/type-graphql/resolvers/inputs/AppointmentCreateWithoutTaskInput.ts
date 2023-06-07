import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateNestedOneWithoutAppointmentsInput } from "../inputs/DoctorCreateNestedOneWithoutAppointmentsInput";
import { PatientCreateNestedOneWithoutAppointmentsInput } from "../inputs/PatientCreateNestedOneWithoutAppointmentsInput";

@TypeGraphQL.InputType("AppointmentCreateWithoutTaskInput", {
  isAbstract: true
})
export class AppointmentCreateWithoutTaskInput {
  @TypeGraphQL.Field(_type => DoctorCreateNestedOneWithoutAppointmentsInput, {
    nullable: false
  })
  doctor!: DoctorCreateNestedOneWithoutAppointmentsInput;

  @TypeGraphQL.Field(_type => PatientCreateNestedOneWithoutAppointmentsInput, {
    nullable: false
  })
  patient!: PatientCreateNestedOneWithoutAppointmentsInput;
}
