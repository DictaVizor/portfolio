import * as TypeGraphQL from "type-graphql";

export enum RefreshTokenScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  type = "type",
  token = "token",
  valid = "valid",
  expiration = "expiration",
  userId = "userId"
}
TypeGraphQL.registerEnumType(RefreshTokenScalarFieldEnum, {
  name: "RefreshTokenScalarFieldEnum",
  description: undefined,
});
