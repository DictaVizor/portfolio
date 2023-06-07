import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateOneWithoutTaskNestedInput } from "../inputs/AppointmentUpdateOneWithoutTaskNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DoctorUpdateOneRequiredWithoutTasksNestedInput } from "../inputs/DoctorUpdateOneRequiredWithoutTasksNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TaskUpdateInput", {
  isAbstract: true
})
export class TaskUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  startDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  endDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateOneRequiredWithoutTasksNestedInput, {
    nullable: true
  })
  doctor?: DoctorUpdateOneRequiredWithoutTasksNestedInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentUpdateOneWithoutTaskNestedInput, {
    nullable: true
  })
  appointment?: AppointmentUpdateOneWithoutTaskNestedInput | undefined;
}
