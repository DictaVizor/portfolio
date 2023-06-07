import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutDoctorInput } from "../inputs/TaskCreateWithoutDoctorInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutDoctorInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutDoctorInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutDoctorInput, {
    nullable: false
  })
  create!: TaskCreateWithoutDoctorInput;
}
