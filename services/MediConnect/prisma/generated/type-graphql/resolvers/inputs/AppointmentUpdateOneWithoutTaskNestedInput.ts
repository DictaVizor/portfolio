import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateOrConnectWithoutTaskInput } from "../inputs/AppointmentCreateOrConnectWithoutTaskInput";
import { AppointmentCreateWithoutTaskInput } from "../inputs/AppointmentCreateWithoutTaskInput";
import { AppointmentUpdateWithoutTaskInput } from "../inputs/AppointmentUpdateWithoutTaskInput";
import { AppointmentUpsertWithoutTaskInput } from "../inputs/AppointmentUpsertWithoutTaskInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpdateOneWithoutTaskNestedInput", {
  isAbstract: true
})
export class AppointmentUpdateOneWithoutTaskNestedInput {
  @TypeGraphQL.Field(_type => AppointmentCreateWithoutTaskInput, {
    nullable: true
  })
  create?: AppointmentCreateWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateOrConnectWithoutTaskInput, {
    nullable: true
  })
  connectOrCreate?: AppointmentCreateOrConnectWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentUpsertWithoutTaskInput, {
    nullable: true
  })
  upsert?: AppointmentUpsertWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: true
  })
  connect?: AppointmentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentUpdateWithoutTaskInput, {
    nullable: true
  })
  update?: AppointmentUpdateWithoutTaskInput | undefined;
}
