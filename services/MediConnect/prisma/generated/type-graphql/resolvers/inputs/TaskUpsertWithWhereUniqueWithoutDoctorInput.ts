import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutDoctorInput } from "../inputs/TaskCreateWithoutDoctorInput";
import { TaskUpdateWithoutDoctorInput } from "../inputs/TaskUpdateWithoutDoctorInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutDoctorInput", {
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutDoctorInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutDoctorInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutDoctorInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutDoctorInput, {
    nullable: false
  })
  create!: TaskCreateWithoutDoctorInput;
}
