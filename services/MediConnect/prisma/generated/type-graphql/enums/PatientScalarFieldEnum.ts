import * as TypeGraphQL from "type-graphql";

export enum PatientScalarFieldEnum {
  id = "id",
  diagnosis = "diagnosis",
  status = "status",
  firstName = "firstName",
  lastName = "lastName",
  age = "age",
  doctorId = "doctorId",
  gender = "gender",
  notes = "notes",
  phoneNumber = "phoneNumber"
}
TypeGraphQL.registerEnumType(PatientScalarFieldEnum, {
  name: "PatientScalarFieldEnum",
  description: undefined,
});
