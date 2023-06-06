import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenType } from "../../enums/TokenType";

@TypeGraphQL.InputType("EnumTokenTypeFieldUpdateOperationsInput", {
  
})
export class EnumTokenTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TokenType, {
    nullable: true
  })
  set?: "EMAIL" | "API" | undefined;
}
