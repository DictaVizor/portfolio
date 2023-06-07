import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientAvgAggregate } from "../outputs/PatientAvgAggregate";
import { PatientCountAggregate } from "../outputs/PatientCountAggregate";
import { PatientMaxAggregate } from "../outputs/PatientMaxAggregate";
import { PatientMinAggregate } from "../outputs/PatientMinAggregate";
import { PatientSumAggregate } from "../outputs/PatientSumAggregate";
import { Gender } from "../../enums/Gender";
import { PatientStatus } from "../../enums/PatientStatus";

@TypeGraphQL.ObjectType("PatientGroupBy", {
  isAbstract: true
})
export class PatientGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  diagnosis!: string | null;

  @TypeGraphQL.Field(_type => PatientStatus, {
    nullable: false
  })
  status!: "RECOVERED" | "AWAITING_SURGERY" | "ON_TREATMENT" | "AWAITING_CONSULT";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  age!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  doctorId!: number | null;

  @TypeGraphQL.Field(_type => Gender, {
    nullable: false
  })
  gender!: "MALE" | "FEMALE" | "NON_BINARY";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phoneNumber!: string;

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
