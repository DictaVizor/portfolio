import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutDoctorInput } from "../inputs/TaskUpdateWithoutDoctorInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutDoctorInput", {
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutDoctorInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutDoctorInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutDoctorInput;
}
