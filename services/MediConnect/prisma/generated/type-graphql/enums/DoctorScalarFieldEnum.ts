import * as TypeGraphQL from "type-graphql";

export enum DoctorScalarFieldEnum {
  id = "id",
  specialty = "specialty",
  userId = "userId"
}
TypeGraphQL.registerEnumType(DoctorScalarFieldEnum, {
  name: "DoctorScalarFieldEnum",
  description: undefined,
});
