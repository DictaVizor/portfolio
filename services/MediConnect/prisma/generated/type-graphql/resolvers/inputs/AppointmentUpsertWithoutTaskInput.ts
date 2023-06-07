import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateWithoutTaskInput } from "../inputs/AppointmentCreateWithoutTaskInput";
import { AppointmentUpdateWithoutTaskInput } from "../inputs/AppointmentUpdateWithoutTaskInput";

@TypeGraphQL.InputType("AppointmentUpsertWithoutTaskInput", {
  isAbstract: true
})
export class AppointmentUpsertWithoutTaskInput {
  @TypeGraphQL.Field(_type => AppointmentUpdateWithoutTaskInput, {
    nullable: false
  })
  update!: AppointmentUpdateWithoutTaskInput;

  @TypeGraphQL.Field(_type => AppointmentCreateWithoutTaskInput, {
    nullable: false
  })
  create!: AppointmentCreateWithoutTaskInput;
}
