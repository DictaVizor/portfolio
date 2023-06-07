import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorUpdateOneRequiredWithoutAppointmentsNestedInput } from "../inputs/DoctorUpdateOneRequiredWithoutAppointmentsNestedInput";
import { PatientUpdateOneRequiredWithoutAppointmentsNestedInput } from "../inputs/PatientUpdateOneRequiredWithoutAppointmentsNestedInput";

@TypeGraphQL.InputType("AppointmentUpdateWithoutTaskInput", {
  isAbstract: true
})
export class AppointmentUpdateWithoutTaskInput {
  @TypeGraphQL.Field(_type => DoctorUpdateOneRequiredWithoutAppointmentsNestedInput, {
    nullable: true
  })
  doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateOneRequiredWithoutAppointmentsNestedInput, {
    nullable: true
  })
  patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput | undefined;
}
