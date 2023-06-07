import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutAppointmentInput } from "../inputs/TaskCreateWithoutAppointmentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutAppointmentInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutAppointmentInput, {
    nullable: false
  })
  create!: TaskCreateWithoutAppointmentInput;
}
