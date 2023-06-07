import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentOrderByRelationAggregateInput } from "../inputs/AppointmentOrderByRelationAggregateInput";
import { PatientOrderByRelationAggregateInput } from "../inputs/PatientOrderByRelationAggregateInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DoctorOrderByWithRelationInput", {
  isAbstract: true
})
export class DoctorOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  specialty?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PatientOrderByRelationAggregateInput, {
    nullable: true
  })
  patients?: PatientOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput, {
    nullable: true
  })
  tasks?: TaskOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentOrderByRelationAggregateInput, {
    nullable: true
  })
  appointments?: AppointmentOrderByRelationAggregateInput | undefined;
}
