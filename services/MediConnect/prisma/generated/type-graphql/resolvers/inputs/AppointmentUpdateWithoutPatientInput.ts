import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorUpdateOneRequiredWithoutAppointmentsNestedInput } from "../inputs/DoctorUpdateOneRequiredWithoutAppointmentsNestedInput";
import { TaskUpdateOneRequiredWithoutAppointmentNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutAppointmentNestedInput";

@TypeGraphQL.InputType("AppointmentUpdateWithoutPatientInput", {
  isAbstract: true
})
export class AppointmentUpdateWithoutPatientInput {
  @TypeGraphQL.Field(_type => DoctorUpdateOneRequiredWithoutAppointmentsNestedInput, {
    nullable: true
  })
  doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneRequiredWithoutAppointmentNestedInput, {
    nullable: true
  })
  task?: TaskUpdateOneRequiredWithoutAppointmentNestedInput | undefined;
}
