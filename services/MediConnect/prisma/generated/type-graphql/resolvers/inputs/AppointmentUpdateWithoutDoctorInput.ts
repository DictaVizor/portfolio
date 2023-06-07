import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientUpdateOneRequiredWithoutAppointmentsNestedInput } from "../inputs/PatientUpdateOneRequiredWithoutAppointmentsNestedInput";
import { TaskUpdateOneRequiredWithoutAppointmentNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutAppointmentNestedInput";

@TypeGraphQL.InputType("AppointmentUpdateWithoutDoctorInput", {
  isAbstract: true
})
export class AppointmentUpdateWithoutDoctorInput {
  @TypeGraphQL.Field(_type => PatientUpdateOneRequiredWithoutAppointmentsNestedInput, {
    nullable: true
  })
  patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneRequiredWithoutAppointmentNestedInput, {
    nullable: true
  })
  task?: TaskUpdateOneRequiredWithoutAppointmentNestedInput | undefined;
}
