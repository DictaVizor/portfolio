import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateNestedOneWithoutTaskInput } from "../inputs/AppointmentCreateNestedOneWithoutTaskInput";

@TypeGraphQL.InputType("TaskCreateWithoutDoctorInput", {
  isAbstract: true
})
export class TaskCreateWithoutDoctorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endDate!: Date;

  @TypeGraphQL.Field(_type => AppointmentCreateNestedOneWithoutTaskInput, {
    nullable: true
  })
  appointment?: AppointmentCreateNestedOneWithoutTaskInput | undefined;
}
