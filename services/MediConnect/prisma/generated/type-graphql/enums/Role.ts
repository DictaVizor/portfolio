import * as TypeGraphQL from "type-graphql";

export enum Role {
  DOCTOR = "DOCTOR",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
