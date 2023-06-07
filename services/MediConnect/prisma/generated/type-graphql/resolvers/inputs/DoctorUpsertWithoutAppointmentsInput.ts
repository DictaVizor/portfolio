import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateWithoutAppointmentsInput } from "../inputs/DoctorCreateWithoutAppointmentsInput";
import { DoctorUpdateWithoutAppointmentsInput } from "../inputs/DoctorUpdateWithoutAppointmentsInput";

@TypeGraphQL.InputType("DoctorUpsertWithoutAppointmentsInput", {
  isAbstract: true
})
export class DoctorUpsertWithoutAppointmentsInput {
  @TypeGraphQL.Field(_type => DoctorUpdateWithoutAppointmentsInput, {
    nullable: false
  })
  update!: DoctorUpdateWithoutAppointmentsInput;

  @TypeGraphQL.Field(_type => DoctorCreateWithoutAppointmentsInput, {
    nullable: false
  })
  create!: DoctorCreateWithoutAppointmentsInput;
}
