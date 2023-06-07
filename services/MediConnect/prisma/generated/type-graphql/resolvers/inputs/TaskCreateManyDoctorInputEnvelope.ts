import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyDoctorInput } from "../inputs/TaskCreateManyDoctorInput";

@TypeGraphQL.InputType("TaskCreateManyDoctorInputEnvelope", {
  isAbstract: true
})
export class TaskCreateManyDoctorInputEnvelope {
  @TypeGraphQL.Field(_type => [TaskCreateManyDoctorInput], {
    nullable: false
  })
  data!: TaskCreateManyDoctorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
