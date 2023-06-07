import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientStatus } from "../../enums/PatientStatus";

@TypeGraphQL.InputType("EnumPatientStatusFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumPatientStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => PatientStatus, {
    nullable: true
  })
  set?: "RECOVERED" | "AWAITING_SURGERY" | "ON_TREATMENT" | "AWAITING_CONSULT" | undefined;
}
