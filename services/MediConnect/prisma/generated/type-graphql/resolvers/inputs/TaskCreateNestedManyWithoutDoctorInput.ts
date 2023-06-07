import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyDoctorInputEnvelope } from "../inputs/TaskCreateManyDoctorInputEnvelope";
import { TaskCreateOrConnectWithoutDoctorInput } from "../inputs/TaskCreateOrConnectWithoutDoctorInput";
import { TaskCreateWithoutDoctorInput } from "../inputs/TaskCreateWithoutDoctorInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutDoctorInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutDoctorInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutDoctorInput], {
    nullable: true
  })
  create?: TaskCreateWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutDoctorInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyDoctorInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyDoctorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
