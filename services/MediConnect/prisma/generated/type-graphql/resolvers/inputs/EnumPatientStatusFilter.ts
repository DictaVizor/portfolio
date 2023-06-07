import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumPatientStatusFilter } from "../inputs/NestedEnumPatientStatusFilter";
import { PatientStatus } from "../../enums/PatientStatus";

@TypeGraphQL.InputType("EnumPatientStatusFilter", {
  isAbstract: true
})
export class EnumPatientStatusFilter {
  @TypeGraphQL.Field(_type => PatientStatus, {
    nullable: true
  })
  equals?: "RECOVERED" | "AWAITING_SURGERY" | "ON_TREATMENT" | "AWAITING_CONSULT" | undefined;

  @TypeGraphQL.Field(_type => [PatientStatus], {
    nullable: true
  })
  in?: Array<"RECOVERED" | "AWAITING_SURGERY" | "ON_TREATMENT" | "AWAITING_CONSULT"> | undefined;

  @TypeGraphQL.Field(_type => [PatientStatus], {
    nullable: true
  })
  notIn?: Array<"RECOVERED" | "AWAITING_SURGERY" | "ON_TREATMENT" | "AWAITING_CONSULT"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPatientStatusFilter, {
    nullable: true
  })
  not?: NestedEnumPatientStatusFilter | undefined;
}
