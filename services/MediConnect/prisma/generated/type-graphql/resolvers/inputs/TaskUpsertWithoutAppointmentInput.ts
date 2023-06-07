import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutAppointmentInput } from "../inputs/TaskCreateWithoutAppointmentInput";
import { TaskUpdateWithoutAppointmentInput } from "../inputs/TaskUpdateWithoutAppointmentInput";

@TypeGraphQL.InputType("TaskUpsertWithoutAppointmentInput", {
  isAbstract: true
})
export class TaskUpsertWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutAppointmentInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutAppointmentInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutAppointmentInput, {
    nullable: false
  })
  create!: TaskCreateWithoutAppointmentInput;
}
