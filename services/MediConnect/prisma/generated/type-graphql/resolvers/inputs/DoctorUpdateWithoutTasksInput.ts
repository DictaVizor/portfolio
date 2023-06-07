import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateManyWithoutDoctorNestedInput } from "../inputs/AppointmentUpdateManyWithoutDoctorNestedInput";
import { PatientUpdateManyWithoutDoctorNestedInput } from "../inputs/PatientUpdateManyWithoutDoctorNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutDoctorNestedInput } from "../inputs/UserUpdateOneRequiredWithoutDoctorNestedInput";

@TypeGraphQL.InputType("DoctorUpdateWithoutTasksInput", {
  isAbstract: true
})
export class DoctorUpdateWithoutTasksInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  specialty?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutDoctorNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutDoctorNestedInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateManyWithoutDoctorNestedInput, {
    nullable: true
  })
  patients?: PatientUpdateManyWithoutDoctorNestedInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentUpdateManyWithoutDoctorNestedInput, {
    nullable: true
  })
  appointments?: AppointmentUpdateManyWithoutDoctorNestedInput | undefined;
}
