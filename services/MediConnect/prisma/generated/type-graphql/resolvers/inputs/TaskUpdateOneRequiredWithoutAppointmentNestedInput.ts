import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutAppointmentInput } from "../inputs/TaskCreateOrConnectWithoutAppointmentInput";
import { TaskCreateWithoutAppointmentInput } from "../inputs/TaskCreateWithoutAppointmentInput";
import { TaskUpdateWithoutAppointmentInput } from "../inputs/TaskUpdateWithoutAppointmentInput";
import { TaskUpsertWithoutAppointmentInput } from "../inputs/TaskUpsertWithoutAppointmentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneRequiredWithoutAppointmentNestedInput", {
  isAbstract: true
})
export class TaskUpdateOneRequiredWithoutAppointmentNestedInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutAppointmentInput, {
    nullable: true
  })
  create?: TaskCreateWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutAppointmentInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpsertWithoutAppointmentInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutAppointmentInput, {
    nullable: true
  })
  update?: TaskUpdateWithoutAppointmentInput | undefined;
}
