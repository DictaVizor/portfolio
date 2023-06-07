import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Gender } from "../../enums/Gender";

@TypeGraphQL.InputType("NestedEnumGenderFilter", {
  isAbstract: true
})
export class NestedEnumGenderFilter {
  @TypeGraphQL.Field(_type => Gender, {
    nullable: true
  })
  equals?: "MALE" | "FEMALE" | "NON_BINARY" | undefined;

  @TypeGraphQL.Field(_type => [Gender], {
    nullable: true
  })
  in?: Array<"MALE" | "FEMALE" | "NON_BINARY"> | undefined;

  @TypeGraphQL.Field(_type => [Gender], {
    nullable: true
  })
  notIn?: Array<"MALE" | "FEMALE" | "NON_BINARY"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGenderFilter, {
    nullable: true
  })
  not?: NestedEnumGenderFilter | undefined;
}
