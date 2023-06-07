import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumPatientStatusFilter } from "../inputs/NestedEnumPatientStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { PatientStatus } from "../../enums/PatientStatus";

@TypeGraphQL.InputType("NestedEnumPatientStatusWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumPatientStatusWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumPatientStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumPatientStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPatientStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumPatientStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPatientStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumPatientStatusFilter | undefined;
}
