import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenType } from "../../enums/TokenType";

@TypeGraphQL.ObjectType("TokenMinAggregate", {
  isAbstract: true
})
export class TokenMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => TokenType, {
    nullable: true
  })
  type!: "EMAIL" | "API" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  emailToken!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  valid!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiration!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;
}
