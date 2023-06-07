import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyDoctorInputEnvelope } from "../inputs/TaskCreateManyDoctorInputEnvelope";
import { TaskCreateOrConnectWithoutDoctorInput } from "../inputs/TaskCreateOrConnectWithoutDoctorInput";
import { TaskCreateWithoutDoctorInput } from "../inputs/TaskCreateWithoutDoctorInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutDoctorInput } from "../inputs/TaskUpdateManyWithWhereWithoutDoctorInput";
import { TaskUpdateWithWhereUniqueWithoutDoctorInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutDoctorInput";
import { TaskUpsertWithWhereUniqueWithoutDoctorInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutDoctorInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutDoctorNestedInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutDoctorNestedInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutDoctorInput], {
    nullable: true
  })
  create?: TaskCreateWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutDoctorInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutDoctorInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyDoctorInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyDoctorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  set?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  delete?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutDoctorInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutDoctorInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
