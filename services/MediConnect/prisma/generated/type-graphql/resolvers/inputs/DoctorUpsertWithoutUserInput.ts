import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateWithoutUserInput } from "../inputs/DoctorCreateWithoutUserInput";
import { DoctorUpdateWithoutUserInput } from "../inputs/DoctorUpdateWithoutUserInput";

@TypeGraphQL.InputType("DoctorUpsertWithoutUserInput", {
  isAbstract: true
})
export class DoctorUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => DoctorUpdateWithoutUserInput, {
    nullable: false
  })
  update!: DoctorUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => DoctorCreateWithoutUserInput, {
    nullable: false
  })
  create!: DoctorCreateWithoutUserInput;
}
