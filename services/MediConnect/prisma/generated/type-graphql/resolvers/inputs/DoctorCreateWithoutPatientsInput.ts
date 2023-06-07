import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateNestedManyWithoutDoctorInput } from "../inputs/AppointmentCreateNestedManyWithoutDoctorInput";
import { TaskCreateNestedManyWithoutDoctorInput } from "../inputs/TaskCreateNestedManyWithoutDoctorInput";
import { UserCreateNestedOneWithoutDoctorInput } from "../inputs/UserCreateNestedOneWithoutDoctorInput";

@TypeGraphQL.InputType("DoctorCreateWithoutPatientsInput", {
  isAbstract: true
})
export class DoctorCreateWithoutPatientsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  specialty!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutDoctorInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutDoctorInput;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutDoctorInput, {
    nullable: true
  })
  tasks?: TaskCreateNestedManyWithoutDoctorInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateNestedManyWithoutDoctorInput, {
    nullable: true
  })
  appointments?: AppointmentCreateNestedManyWithoutDoctorInput | undefined;
}
