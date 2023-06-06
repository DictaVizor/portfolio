import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { RefreshToken } from "../models/RefreshToken";
import { Role } from "../enums/Role";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | null;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  social?: Prisma.JsonValue | null;

  tokens?: RefreshToken[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}