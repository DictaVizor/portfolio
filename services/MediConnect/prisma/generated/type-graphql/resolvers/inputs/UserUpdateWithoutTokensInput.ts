import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DoctorUpdateOneWithoutUserNestedInput } from "../inputs/DoctorUpdateOneWithoutUserNestedInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateWithoutTokensInput", {
  isAbstract: true
})
export class UserUpdateWithoutTokensInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  social?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateOneWithoutUserNestedInput, {
    nullable: true
  })
  Doctor?: DoctorUpdateOneWithoutUserNestedInput | undefined;
}
