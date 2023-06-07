import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientAvgOrderByAggregateInput } from "../inputs/PatientAvgOrderByAggregateInput";
import { PatientCountOrderByAggregateInput } from "../inputs/PatientCountOrderByAggregateInput";
import { PatientMaxOrderByAggregateInput } from "../inputs/PatientMaxOrderByAggregateInput";
import { PatientMinOrderByAggregateInput } from "../inputs/PatientMinOrderByAggregateInput";
import { PatientSumOrderByAggregateInput } from "../inputs/PatientSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PatientOrderByWithAggregationInput", {
  isAbstract: true
})
export class PatientOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  diagnosis?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  age?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  doctorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gender?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  notes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  phoneNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PatientCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PatientCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PatientAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PatientMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PatientMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PatientSumOrderByAggregateInput | undefined;
}
