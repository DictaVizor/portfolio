import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateWithoutTasksInput } from "../inputs/DoctorCreateWithoutTasksInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorCreateOrConnectWithoutTasksInput", {
  isAbstract: true
})
export class DoctorCreateOrConnectWithoutTasksInput {
  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorCreateWithoutTasksInput, {
    nullable: false
  })
  create!: DoctorCreateWithoutTasksInput;
}
