import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorUpdateOneRequiredWithoutAppointmentsNestedInput } from "../inputs/DoctorUpdateOneRequiredWithoutAppointmentsNestedInput";
import { PatientUpdateOneRequiredWithoutAppointmentsNestedInput } from "../inputs/PatientUpdateOneRequiredWithoutAppointmentsNestedInput";
import { TaskUpdateOneRequiredWithoutAppointmentNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutAppointmentNestedInput";

@TypeGraphQL.InputType("AppointmentUpdateInput", {
  isAbstract: true
})
export class AppointmentUpdateInput {
  @TypeGraphQL.Field(_type => DoctorUpdateOneRequiredWithoutAppointmentsNestedInput, {
    nullable: true
  })
  doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateOneRequiredWithoutAppointmentsNestedInput, {
    nullable: true
  })
  patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneRequiredWithoutAppointmentNestedInput, {
    nullable: true
  })
  task?: TaskUpdateOneRequiredWithoutAppointmentNestedInput | undefined;
}
