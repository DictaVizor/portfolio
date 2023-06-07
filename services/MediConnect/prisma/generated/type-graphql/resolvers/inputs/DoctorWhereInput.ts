import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentListRelationFilter } from "../inputs/AppointmentListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PatientListRelationFilter } from "../inputs/PatientListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("DoctorWhereInput", {
  isAbstract: true
})
export class DoctorWhereInput {
  @TypeGraphQL.Field(_type => [DoctorWhereInput], {
    nullable: true
  })
  AND?: DoctorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorWhereInput], {
    nullable: true
  })
  OR?: DoctorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorWhereInput], {
    nullable: true
  })
  NOT?: DoctorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  specialty?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PatientListRelationFilter, {
    nullable: true
  })
  patients?: PatientListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  tasks?: TaskListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AppointmentListRelationFilter, {
    nullable: true
  })
  appointments?: AppointmentListRelationFilter | undefined;
}
