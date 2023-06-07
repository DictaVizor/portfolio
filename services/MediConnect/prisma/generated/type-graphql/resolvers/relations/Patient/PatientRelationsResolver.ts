import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Appointment } from "../../../models/Appointment";
import { Doctor } from "../../../models/Doctor";
import { Patient } from "../../../models/Patient";
import { PatientAppointmentsArgs } from "./args/PatientAppointmentsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patient)
export class PatientRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Doctor, {
    nullable: true
  })
  async doctor(@TypeGraphQL.Root() patient: Patient, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Doctor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patient.findUniqueOrThrow({
      where: {
        id: patient.id,
      },
    }).doctor({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Appointment], {
    nullable: false
  })
  async appointments(@TypeGraphQL.Root() patient: Patient, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PatientAppointmentsArgs): Promise<Appointment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patient.findUniqueOrThrow({
      where: {
        id: patient.id,
      },
    }).appointments({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
