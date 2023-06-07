import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Appointment } from "../models/Appointment";
import { Patient } from "../models/Patient";
import { Task } from "../models/Task";
import { User } from "../models/User";
import { DoctorCount } from "../resolvers/outputs/DoctorCount";

@TypeGraphQL.ObjectType("Doctor", {
  isAbstract: true
})
export class Doctor {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  specialty!: string;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  patients?: Patient[];

  tasks?: Task[];

  appointments?: Appointment[];

  @TypeGraphQL.Field(_type => DoctorCount, {
    nullable: true
  })
  _count?: DoctorCount | null;
}
