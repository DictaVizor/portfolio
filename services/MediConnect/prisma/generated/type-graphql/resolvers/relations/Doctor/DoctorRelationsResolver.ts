import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Appointment } from "../../../models/Appointment";
import { Doctor } from "../../../models/Doctor";
import { Patient } from "../../../models/Patient";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { DoctorAppointmentsArgs } from "./args/DoctorAppointmentsArgs";
import { DoctorPatientsArgs } from "./args/DoctorPatientsArgs";
import { DoctorTasksArgs } from "./args/DoctorTasksArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctor)
export class DoctorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() doctor: Doctor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctor.findUniqueOrThrow({
      where: {
        id: doctor.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Patient], {
    nullable: false
  })
  async patients(@TypeGraphQL.Root() doctor: Doctor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DoctorPatientsArgs): Promise<Patient[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctor.findUniqueOrThrow({
      where: {
        id: doctor.id,
      },
    }).patients({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async tasks(@TypeGraphQL.Root() doctor: Doctor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DoctorTasksArgs): Promise<Task[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctor.findUniqueOrThrow({
      where: {
        id: doctor.id,
      },
    }).tasks({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Appointment], {
    nullable: false
  })
  async appointments(@TypeGraphQL.Root() doctor: Doctor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DoctorAppointmentsArgs): Promise<Appointment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctor.findUniqueOrThrow({
      where: {
        id: doctor.id,
      },
    }).appointments({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
