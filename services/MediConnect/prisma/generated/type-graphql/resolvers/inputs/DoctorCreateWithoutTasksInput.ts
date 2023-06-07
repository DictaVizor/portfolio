import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateNestedManyWithoutDoctorInput } from "../inputs/AppointmentCreateNestedManyWithoutDoctorInput";
import { PatientCreateNestedManyWithoutDoctorInput } from "../inputs/PatientCreateNestedManyWithoutDoctorInput";
import { UserCreateNestedOneWithoutDoctorInput } from "../inputs/UserCreateNestedOneWithoutDoctorInput";

@TypeGraphQL.InputType("DoctorCreateWithoutTasksInput", {
  isAbstract: true
})
export class DoctorCreateWithoutTasksInput {
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

  @TypeGraphQL.Field(_type => AppointmentCreateNestedManyWithoutDoctorInput, {
    nullable: true
  })
  appointments?: AppointmentCreateNestedManyWithoutDoctorInput | undefined;
}
