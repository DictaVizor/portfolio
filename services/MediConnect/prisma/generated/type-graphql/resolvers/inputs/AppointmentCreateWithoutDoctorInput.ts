import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateNestedOneWithoutAppointmentsInput } from "../inputs/PatientCreateNestedOneWithoutAppointmentsInput";
import { TaskCreateNestedOneWithoutAppointmentInput } from "../inputs/TaskCreateNestedOneWithoutAppointmentInput";

@TypeGraphQL.InputType("AppointmentCreateWithoutDoctorInput", {
  isAbstract: true
})
export class AppointmentCreateWithoutDoctorInput {
  @TypeGraphQL.Field(_type => PatientCreateNestedOneWithoutAppointmentsInput, {
    nullable: false
  })
  patient!: PatientCreateNestedOneWithoutAppointmentsInput;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutAppointmentInput, {
    nullable: false
  })
  task!: TaskCreateNestedOneWithoutAppointmentInput;
}
