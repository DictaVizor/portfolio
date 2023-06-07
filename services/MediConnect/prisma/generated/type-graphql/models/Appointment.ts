import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Doctor } from "../models/Doctor";
import { Patient } from "../models/Patient";
import { Task } from "../models/Task";

@TypeGraphQL.ObjectType("Appointment", {
  isAbstract: true
})
export class Appointment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  doctor?: Doctor;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  doctorId!: number;

  patient?: Patient;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  patientId!: number;

  task?: Task;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  taskId!: number;
}
