import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Gender } from "../../enums/Gender";

@TypeGraphQL.InputType("EnumGenderFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumGenderFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Gender, {
    nullable: true
  })
  set?: "MALE" | "FEMALE" | "NON_BINARY" | undefined;
}
