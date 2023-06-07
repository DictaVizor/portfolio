import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateOrConnectWithoutAppointmentsInput } from "../inputs/PatientCreateOrConnectWithoutAppointmentsInput";
import { PatientCreateWithoutAppointmentsInput } from "../inputs/PatientCreateWithoutAppointmentsInput";
import { PatientUpdateWithoutAppointmentsInput } from "../inputs/PatientUpdateWithoutAppointmentsInput";
import { PatientUpsertWithoutAppointmentsInput } from "../inputs/PatientUpsertWithoutAppointmentsInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientUpdateOneRequiredWithoutAppointmentsNestedInput", {
  isAbstract: true
})
export class PatientUpdateOneRequiredWithoutAppointmentsNestedInput {
  @TypeGraphQL.Field(_type => PatientCreateWithoutAppointmentsInput, {
    nullable: true
  })
  create?: PatientCreateWithoutAppointmentsInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateOrConnectWithoutAppointmentsInput, {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpsertWithoutAppointmentsInput, {
    nullable: true
  })
  upsert?: PatientUpsertWithoutAppointmentsInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateWithoutAppointmentsInput, {
    nullable: true
  })
  update?: PatientUpdateWithoutAppointmentsInput | undefined;
}
