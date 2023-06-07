import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumGenderFilter } from "../inputs/NestedEnumGenderFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Gender } from "../../enums/Gender";

@TypeGraphQL.InputType("NestedEnumGenderWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumGenderWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumGenderWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumGenderWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGenderFilter, {
    nullable: true
  })
  _min?: NestedEnumGenderFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGenderFilter, {
    nullable: true
  })
  _max?: NestedEnumGenderFilter | undefined;
}
