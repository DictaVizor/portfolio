import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Gender } from "../../enums/Gender";
import { PatientStatus } from "../../enums/PatientStatus";

@TypeGraphQL.ObjectType("PatientMaxAggregate", {
  isAbstract: true
})
export class PatientMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  diagnosis!: string | null;

  @TypeGraphQL.Field(_type => PatientStatus, {
    nullable: true
  })
  status!: "RECOVERED" | "AWAITING_SURGERY" | "ON_TREATMENT" | "AWAITING_CONSULT" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  age!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  doctorId!: number | null;

  @TypeGraphQL.Field(_type => Gender, {
    nullable: true
  })
  gender!: "MALE" | "FEMALE" | "NON_BINARY" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber!: string | null;
}
