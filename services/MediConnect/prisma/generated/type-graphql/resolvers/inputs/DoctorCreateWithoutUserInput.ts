import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateNestedManyWithoutDoctorInput } from "../inputs/AppointmentCreateNestedManyWithoutDoctorInput";
import { PatientCreateNestedManyWithoutDoctorInput } from "../inputs/PatientCreateNestedManyWithoutDoctorInput";
import { TaskCreateNestedManyWithoutDoctorInput } from "../inputs/TaskCreateNestedManyWithoutDoctorInput";

@TypeGraphQL.InputType("DoctorCreateWithoutUserInput", {
  isAbstract: true
})
export class DoctorCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  specialty!: string;

  @TypeGraphQL.Field(_type => PatientCreateNestedManyWithoutDoctorInput, {
    nullable: true
  })
  patients?: PatientCreateNestedManyWithoutDoctorInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutDoctorInput, {
    nullable: true
  })
  tasks?: TaskCreateNestedManyWithoutDoctorInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateNestedManyWithoutDoctorInput, {
    nullable: true
  })
  appointments?: AppointmentCreateNestedManyWithoutDoctorInput | undefined;
}
