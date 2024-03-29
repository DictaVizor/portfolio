import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientAvgAggregate } from "../outputs/PatientAvgAggregate";
import { PatientCountAggregate } from "../outputs/PatientCountAggregate";
import { PatientMaxAggregate } from "../outputs/PatientMaxAggregate";
import { PatientMinAggregate } from "../outputs/PatientMinAggregate";
import { PatientSumAggregate } from "../outputs/PatientSumAggregate";

@TypeGraphQL.ObjectType("AggregatePatient", {
  isAbstract: true
})
export class AggregatePatient {
  @TypeGraphQL.Field(_type => PatientCountAggregate, {
    nullable: true
  })
  _count!: PatientCountAggregate | null;

  @TypeGraphQL.Field(_type => PatientAvgAggregate, {
    nullable: true
  })
  _avg!: PatientAvgAggregate | null;

  @TypeGraphQL.Field(_type => PatientSumAggregate, {
    nullable: true
  })
  _sum!: PatientSumAggregate | null;

  @TypeGraphQL.Field(_type => PatientMinAggregate, {
    nullable: true
  })
  _min!: PatientMinAggregate | null;

  @TypeGraphQL.Field(_type => PatientMaxAggregate, {
    nullable: true
  })
  _max!: PatientMaxAggregate | null;
}
