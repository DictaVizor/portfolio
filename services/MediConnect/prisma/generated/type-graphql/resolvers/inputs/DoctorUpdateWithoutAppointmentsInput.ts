import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientUpdateManyWithoutDoctorNestedInput } from "../inputs/PatientUpdateManyWithoutDoctorNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutDoctorNestedInput } from "../inputs/TaskUpdateManyWithoutDoctorNestedInput";
import { UserUpdateOneRequiredWithoutDoctorNestedInput } from "../inputs/UserUpdateOneRequiredWithoutDoctorNestedInput";

@TypeGraphQL.InputType("DoctorUpdateWithoutAppointmentsInput", {
  isAbstract: true
})
export class DoctorUpdateWithoutAppointmentsInput {
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

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutDoctorNestedInput, {
    nullable: true
  })
  tasks?: TaskUpdateManyWithoutDoctorNestedInput | undefined;
}
