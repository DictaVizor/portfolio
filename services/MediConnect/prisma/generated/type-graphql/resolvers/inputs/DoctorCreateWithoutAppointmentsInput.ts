import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateNestedManyWithoutDoctorInput } from "../inputs/PatientCreateNestedManyWithoutDoctorInput";
import { TaskCreateNestedManyWithoutDoctorInput } from "../inputs/TaskCreateNestedManyWithoutDoctorInput";
import { UserCreateNestedOneWithoutDoctorInput } from "../inputs/UserCreateNestedOneWithoutDoctorInput";

@TypeGraphQL.InputType("DoctorCreateWithoutAppointmentsInput", {
  isAbstract: true
})
export class DoctorCreateWithoutAppointmentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  specialty!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutDoctorInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutDoctorInput;

  @TypeGraphQL.Field(_type => PatientCreateNestedManyWithoutDoctorInput, {
    nullable: true
  })
  patients?: PatientCreateNestedManyWithoutDoctorInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutDoctorInput, {
    nullable: true
  })
  tasks?: TaskCreateNestedManyWithoutDoctorInput | undefined;
}
