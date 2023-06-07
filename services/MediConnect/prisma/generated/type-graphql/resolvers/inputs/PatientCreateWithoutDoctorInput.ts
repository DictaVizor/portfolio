import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateNestedManyWithoutPatientInput } from "../inputs/AppointmentCreateNestedManyWithoutPatientInput";
import { Gender } from "../../enums/Gender";
import { PatientStatus } from "../../enums/PatientStatus";

@TypeGraphQL.InputType("PatientCreateWithoutDoctorInput", {
  isAbstract: true
})
export class PatientCreateWithoutDoctorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  diagnosis?: string | undefined;

  @TypeGraphQL.Field(_type => PatientStatus, {
    nullable: true
  })
  status?: "RECOVERED" | "AWAITING_SURGERY" | "ON_TREATMENT" | "AWAITING_CONSULT" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  age!: number;

  @TypeGraphQL.Field(_type => Gender, {
    nullable: false
  })
  gender!: "MALE" | "FEMALE" | "NON_BINARY";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phoneNumber!: string;

  @TypeGraphQL.Field(_type => AppointmentCreateNestedManyWithoutPatientInput, {
    nullable: true
  })
  appointments?: AppointmentCreateNestedManyWithoutPatientInput | undefined;
}
