import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutTokensInput } from "../inputs/UserCreateNestedOneWithoutTokensInput";
import { TokenType } from "../../enums/TokenType";

@TypeGraphQL.InputType("RefreshTokenCreateInput", {
  isAbstract: true
})
export class RefreshTokenCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TokenType, {
    nullable: false
  })
  type!: "EMAIL" | "API";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  valid?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expiration!: Date;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTokensInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutTokensInput;
}
