import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateNestedOneWithoutAppointmentsInput } from "../inputs/DoctorCreateNestedOneWithoutAppointmentsInput";
import { TaskCreateNestedOneWithoutAppointmentInput } from "../inputs/TaskCreateNestedOneWithoutAppointmentInput";

@TypeGraphQL.InputType("AppointmentCreateWithoutPatientInput", {
  isAbstract: true
})
export class AppointmentCreateWithoutPatientInput {
  @TypeGraphQL.Field(_type => DoctorCreateNestedOneWithoutAppointmentsInput, {
    nullable: false
  })
  doctor!: DoctorCreateNestedOneWithoutAppointmentsInput;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutAppointmentInput, {
    nullable: false
  })
  task!: TaskCreateNestedOneWithoutAppointmentInput;
}
