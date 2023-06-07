import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateManyWithoutDoctorNestedInput } from "../inputs/AppointmentUpdateManyWithoutDoctorNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutDoctorNestedInput } from "../inputs/TaskUpdateManyWithoutDoctorNestedInput";
import { UserUpdateOneRequiredWithoutDoctorNestedInput } from "../inputs/UserUpdateOneRequiredWithoutDoctorNestedInput";

@TypeGraphQL.InputType("DoctorUpdateWithoutPatientsInput", {
  isAbstract: true
})
export class DoctorUpdateWithoutPatientsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  specialty?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutDoctorNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutDoctorNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutDoctorNestedInput, {
    nullable: true
  })
  tasks?: TaskUpdateManyWithoutDoctorNestedInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentUpdateManyWithoutDoctorNestedInput, {
    nullable: true
  })
  appointments?: AppointmentUpdateManyWithoutDoctorNestedInput | undefined;
}
