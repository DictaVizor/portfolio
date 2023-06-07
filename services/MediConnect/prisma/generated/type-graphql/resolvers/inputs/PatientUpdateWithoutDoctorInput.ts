import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateManyWithoutPatientNestedInput } from "../inputs/AppointmentUpdateManyWithoutPatientNestedInput";
import { EnumGenderFieldUpdateOperationsInput } from "../inputs/EnumGenderFieldUpdateOperationsInput";
import { EnumPatientStatusFieldUpdateOperationsInput } from "../inputs/EnumPatientStatusFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PatientUpdateWithoutDoctorInput", {
  isAbstract: true
})
export class PatientUpdateWithoutDoctorInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  diagnosis?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumPatientStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumPatientStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  age?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumGenderFieldUpdateOperationsInput, {
    nullable: true
  })
  gender?: EnumGenderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  notes?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  phoneNumber?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentUpdateManyWithoutPatientNestedInput, {
    nullable: true
  })
  appointments?: AppointmentUpdateManyWithoutPatientNestedInput | undefined;
}
