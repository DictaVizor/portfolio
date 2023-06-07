import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentScalarWhereInput } from "../inputs/AppointmentScalarWhereInput";
import { AppointmentUpdateManyMutationInput } from "../inputs/AppointmentUpdateManyMutationInput";

@TypeGraphQL.InputType("AppointmentUpdateManyWithWhereWithoutDoctorInput", {
  isAbstract: true
})
export class AppointmentUpdateManyWithWhereWithoutDoctorInput {
  @TypeGraphQL.Field(_type => AppointmentScalarWhereInput, {
    nullable: false
  })
  where!: AppointmentScalarWhereInput;

  @TypeGraphQL.Field(_type => AppointmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: AppointmentUpdateManyMutationInput;
}
