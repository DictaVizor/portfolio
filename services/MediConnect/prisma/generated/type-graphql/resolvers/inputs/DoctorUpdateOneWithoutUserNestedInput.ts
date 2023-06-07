import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutUserInput } from "../inputs/DoctorCreateOrConnectWithoutUserInput";
import { DoctorCreateWithoutUserInput } from "../inputs/DoctorCreateWithoutUserInput";
import { DoctorUpdateWithoutUserInput } from "../inputs/DoctorUpdateWithoutUserInput";
import { DoctorUpsertWithoutUserInput } from "../inputs/DoctorUpsertWithoutUserInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorUpdateOneWithoutUserNestedInput", {
  isAbstract: true
})
export class DoctorUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutUserInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: DoctorUpsertWithoutUserInput | undefined;

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

  @TypeGraphQL.Field(_type => DoctorUpdateWithoutUserInput, {
    nullable: true
  })
  update?: DoctorUpdateWithoutUserInput | undefined;
}
