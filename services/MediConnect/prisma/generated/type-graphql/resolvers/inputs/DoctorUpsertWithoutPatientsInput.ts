import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateWithoutPatientsInput } from "../inputs/DoctorCreateWithoutPatientsInput";
import { DoctorUpdateWithoutPatientsInput } from "../inputs/DoctorUpdateWithoutPatientsInput";

@TypeGraphQL.InputType("DoctorUpsertWithoutPatientsInput", {
  isAbstract: true
})
export class DoctorUpsertWithoutPatientsInput {
  @TypeGraphQL.Field(_type => DoctorUpdateWithoutPatientsInput, {
    nullable: false
  })
  update!: DoctorUpdateWithoutPatientsInput;

  @TypeGraphQL.Field(_type => DoctorCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: DoctorCreateWithoutPatientsInput;
}
