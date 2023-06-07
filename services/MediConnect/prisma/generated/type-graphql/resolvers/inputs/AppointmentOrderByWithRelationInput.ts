import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorOrderByWithRelationInput } from "../inputs/DoctorOrderByWithRelationInput";
import { PatientOrderByWithRelationInput } from "../inputs/PatientOrderByWithRelationInput";
import { TaskOrderByWithRelationInput } from "../inputs/TaskOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AppointmentOrderByWithRelationInput", {
  isAbstract: true
})
export class AppointmentOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  doctorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patientId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  taskId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DoctorOrderByWithRelationInput, {
    nullable: true
  })
  doctor?: DoctorOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PatientOrderByWithRelationInput, {
    nullable: true
  })
  patient?: PatientOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByWithRelationInput, {
    nullable: true
  })
  task?: TaskOrderByWithRelationInput | undefined;
}
