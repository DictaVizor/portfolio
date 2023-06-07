import * as TypeGraphQL from "type-graphql";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  NON_BINARY = "NON_BINARY"
}
TypeGraphQL.registerEnumType(Gender, {
  name: "Gender",
  description: undefined,
});
