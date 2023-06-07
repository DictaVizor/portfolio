import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateWithoutTasksInput } from "../inputs/DoctorCreateWithoutTasksInput";
import { DoctorUpdateWithoutTasksInput } from "../inputs/DoctorUpdateWithoutTasksInput";

@TypeGraphQL.InputType("DoctorUpsertWithoutTasksInput", {
  isAbstract: true
})
export class DoctorUpsertWithoutTasksInput {
  @TypeGraphQL.Field(_type => DoctorUpdateWithoutTasksInput, {
    nullable: false
  })
  update!: DoctorUpdateWithoutTasksInput;

  @TypeGraphQL.Field(_type => DoctorCreateWithoutTasksInput, {
    nullable: false
  })
  create!: DoctorCreateWithoutTasksInput;
}
