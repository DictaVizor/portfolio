import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateOrConnectWithoutTaskInput } from "../inputs/AppointmentCreateOrConnectWithoutTaskInput";
import { AppointmentCreateWithoutTaskInput } from "../inputs/AppointmentCreateWithoutTaskInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentCreateNestedOneWithoutTaskInput", {
  isAbstract: true
})
export class AppointmentCreateNestedOneWithoutTaskInput {
  @TypeGraphQL.Field(_type => AppointmentCreateWithoutTaskInput, {
    nullable: true
  })
  create?: AppointmentCreateWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateOrConnectWithoutTaskInput, {
    nullable: true
  })
  connectOrCreate?: AppointmentCreateOrConnectWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: true
  })
  connect?: AppointmentWhereUniqueInput | undefined;
}
