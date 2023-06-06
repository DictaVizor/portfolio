import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenType } from "../../enums/TokenType";

@TypeGraphQL.InputType("NestedEnumTokenTypeFilter", {
  
})
export class NestedEnumTokenTypeFilter {
  @TypeGraphQL.Field(_type => TokenType, {
    nullable: true
  })
  equals?: "EMAIL" | "API" | undefined;

  @TypeGraphQL.Field(_type => [TokenType], {
    nullable: true
  })
  in?: Array<"EMAIL" | "API"> | undefined;

  @TypeGraphQL.Field(_type => [TokenType], {
    nullable: true
  })
  notIn?: Array<"EMAIL" | "API"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTokenTypeFilter, {
    nullable: true
  })
  not?: NestedEnumTokenTypeFilter | undefined;
}
