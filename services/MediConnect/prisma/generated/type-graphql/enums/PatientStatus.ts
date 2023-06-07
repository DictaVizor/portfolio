import * as TypeGraphQL from "type-graphql";

export enum PatientStatus {
  RECOVERED = "RECOVERED",
  AWAITING_SURGERY = "AWAITING_SURGERY",
  ON_TREATMENT = "ON_TREATMENT",
  AWAITING_CONSULT = "AWAITING_CONSULT"
}
TypeGraphQL.registerEnumType(PatientStatus, {
  name: "PatientStatus",
  description: undefined,
});
