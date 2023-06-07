import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutDoctorInput } from "../inputs/UserCreateWithoutDoctorInput";
import { UserUpdateWithoutDoctorInput } from "../inputs/UserUpdateWithoutDoctorInput";

@TypeGraphQL.InputType("UserUpsertWithoutDoctorInput", {
  isAbstract: true
})
export class UserUpsertWithoutDoctorInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutDoctorInput, {
    nullable: false
  })
  update!: UserUpdateWithoutDoctorInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutDoctorInput, {
    nullable: false
  })
  create!: UserCreateWithoutDoctorInput;
}
