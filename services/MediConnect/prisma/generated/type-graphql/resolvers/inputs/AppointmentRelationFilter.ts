import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentWhereInput } from "../inputs/AppointmentWhereInput";

@TypeGraphQL.InputType("AppointmentRelationFilter", {
  isAbstract: true
})
export class AppointmentRelationFilter {
  @TypeGraphQL.Field(_type => AppointmentWhereInput, {
    nullable: true
  })
  is?: AppointmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentWhereInput, {
    nullable: true
  })
  isNot?: AppointmentWhereInput | undefined;
}
