import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Appointment } from "../../../models/Appointment";
import { Doctor } from "../../../models/Doctor";
import { Patient } from "../../../models/Patient";
import { Task } from "../../../models/Task";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Appointment)
export class AppointmentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Doctor, {
    nullable: false
  })
  async doctor(@TypeGraphQL.Root() appointment: Appointment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Doctor> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).appointment.findUniqueOrThrow({
      where: {
        id: appointment.id,
      },
    }).doctor({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Patient, {
    nullable: false
  })
  async patient(@TypeGraphQL.Root() appointment: Appointment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patient> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).appointment.findUniqueOrThrow({
      where: {
        id: appointment.id,
      },
    }).patient({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: false
  })
  async task(@TypeGraphQL.Root() appointment: Appointment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Task> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).appointment.findUniqueOrThrow({
      where: {
        id: appointment.id,
      },
    }).task({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
