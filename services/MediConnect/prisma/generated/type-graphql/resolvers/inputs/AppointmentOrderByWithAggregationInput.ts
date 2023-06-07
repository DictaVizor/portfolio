import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentAvgOrderByAggregateInput } from "../inputs/AppointmentAvgOrderByAggregateInput";
import { AppointmentCountOrderByAggregateInput } from "../inputs/AppointmentCountOrderByAggregateInput";
import { AppointmentMaxOrderByAggregateInput } from "../inputs/AppointmentMaxOrderByAggregateInput";
import { AppointmentMinOrderByAggregateInput } from "../inputs/AppointmentMinOrderByAggregateInput";
import { AppointmentSumOrderByAggregateInput } from "../inputs/AppointmentSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AppointmentOrderByWithAggregationInput", {
  isAbstract: true
})
export class AppointmentOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => AppointmentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AppointmentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AppointmentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AppointmentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AppointmentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AppointmentSumOrderByAggregateInput | undefined;
}
