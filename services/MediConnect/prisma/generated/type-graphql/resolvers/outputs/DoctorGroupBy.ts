import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorAvgAggregate } from "../outputs/DoctorAvgAggregate";
import { DoctorCountAggregate } from "../outputs/DoctorCountAggregate";
import { DoctorMaxAggregate } from "../outputs/DoctorMaxAggregate";
import { DoctorMinAggregate } from "../outputs/DoctorMinAggregate";
import { DoctorSumAggregate } from "../outputs/DoctorSumAggregate";

@TypeGraphQL.ObjectType("DoctorGroupBy", {
  isAbstract: true
})
export class DoctorGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  specialty!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => DoctorCountAggregate, {
    nullable: true
  })
  _count!: DoctorCountAggregate | null;

  @TypeGraphQL.Field(_type => DoctorAvgAggregate, {
    nullable: true
  })
  _avg!: DoctorAvgAggregate | null;

  @TypeGraphQL.Field(_type => DoctorSumAggregate, {
    nullable: true
  })
  _sum!: DoctorSumAggregate | null;

  @TypeGraphQL.Field(_type => DoctorMinAggregate, {
    nullable: true
  })
  _min!: DoctorMinAggregate | null;

  @TypeGraphQL.Field(_type => DoctorMaxAggregate, {
    nullable: true
  })
  _max!: DoctorMaxAggregate | null;
}
