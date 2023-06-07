import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("AppointmentScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AppointmentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AppointmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AppointmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AppointmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AppointmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  doctorId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  patientId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  taskId?: IntWithAggregatesFilter | undefined;
}
