import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Appointment } from "../models/Appointment";
import { Doctor } from "../models/Doctor";
import { Gender } from "../enums/Gender";
import { PatientStatus } from "../enums/PatientStatus";
import { PatientCount } from "../resolvers/outputs/PatientCount";

@TypeGraphQL.ObjectType("Patient", {
  isAbstract: true
})
export class Patient {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  diagnosis?: string | null;

  @TypeGraphQL.Field(_type => PatientStatus, {
    nullable: false
  })
  status!: "RECOVERED" | "AWAITING_SURGERY" | "ON_TREATMENT" | "AWAITING_CONSULT";

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

  doctor?: Doctor | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  doctorId?: number | null;

  @TypeGraphQL.Field(_type => Gender, {
    nullable: false
  })
  gender!: "MALE" | "FEMALE" | "NON_BINARY";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phoneNumber!: string;

  appointments?: Appointment[];

  @TypeGraphQL.Field(_type => PatientCount, {
    nullable: true
  })
  _count?: PatientCount | null;
}
