import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateManyWithoutDoctorNestedInput } from "../inputs/AppointmentUpdateManyWithoutDoctorNestedInput";
import { PatientUpdateManyWithoutDoctorNestedInput } from "../inputs/PatientUpdateManyWithoutDoctorNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutDoctorNestedInput } from "../inputs/TaskUpdateManyWithoutDoctorNestedInput";

@TypeGraphQL.InputType("DoctorUpdateWithoutUserInput", {
  isAbstract: true
})
export class DoctorUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  specialty?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateManyWithoutDoctorNestedInput, {
    nullable: true
  })
  patients?: PatientUpdateManyWithoutDoctorNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutDoctorNestedInput, {
    nullable: true
  })
  tasks?: TaskUpdateManyWithoutDoctorNestedInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentUpdateManyWithoutDoctorNestedInput, {
    nullable: true
  })
  appointments?: AppointmentUpdateManyWithoutDoctorNestedInput | undefined;
}
