import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutPatientsInput } from "../inputs/DoctorCreateOrConnectWithoutPatientsInput";
import { DoctorCreateWithoutPatientsInput } from "../inputs/DoctorCreateWithoutPatientsInput";
import { DoctorUpdateWithoutPatientsInput } from "../inputs/DoctorUpdateWithoutPatientsInput";
import { DoctorUpsertWithoutPatientsInput } from "../inputs/DoctorUpsertWithoutPatientsInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorUpdateOneWithoutPatientsNestedInput", {
  isAbstract: true
})
export class DoctorUpdateOneWithoutPatientsNestedInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutPatientsInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutPatientsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpsertWithoutPatientsInput, {
    nullable: true
  })
  upsert?: DoctorUpsertWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateWithoutPatientsInput, {
    nullable: true
  })
  update?: DoctorUpdateWithoutPatientsInput | undefined;
}
