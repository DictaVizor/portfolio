import * as TypeGraphQL from "type-graphql";

export enum AppointmentScalarFieldEnum {
  id = "id",
  doctorId = "doctorId",
  patientId = "patientId",
  taskId = "taskId"
}
TypeGraphQL.registerEnumType(AppointmentScalarFieldEnum, {
  name: "AppointmentScalarFieldEnum",
  description: undefined,
});
