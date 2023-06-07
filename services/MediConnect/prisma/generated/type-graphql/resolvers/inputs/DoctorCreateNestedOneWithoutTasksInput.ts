import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutTasksInput } from "../inputs/DoctorCreateOrConnectWithoutTasksInput";
import { DoctorCreateWithoutTasksInput } from "../inputs/DoctorCreateWithoutTasksInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorCreateNestedOneWithoutTasksInput", {
  isAbstract: true
})
export class DoctorCreateNestedOneWithoutTasksInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutTasksInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutTasksInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorWhereUniqueInput | undefined;
}
