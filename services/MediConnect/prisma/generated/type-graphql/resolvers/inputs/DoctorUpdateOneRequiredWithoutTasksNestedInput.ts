import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutTasksInput } from "../inputs/DoctorCreateOrConnectWithoutTasksInput";
import { DoctorCreateWithoutTasksInput } from "../inputs/DoctorCreateWithoutTasksInput";
import { DoctorUpdateWithoutTasksInput } from "../inputs/DoctorUpdateWithoutTasksInput";
import { DoctorUpsertWithoutTasksInput } from "../inputs/DoctorUpsertWithoutTasksInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorUpdateOneRequiredWithoutTasksNestedInput", {
  isAbstract: true
})
export class DoctorUpdateOneRequiredWithoutTasksNestedInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutTasksInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutTasksInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpsertWithoutTasksInput, {
    nullable: true
  })
  upsert?: DoctorUpsertWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateWithoutTasksInput, {
    nullable: true
  })
  update?: DoctorUpdateWithoutTasksInput | undefined;
}
