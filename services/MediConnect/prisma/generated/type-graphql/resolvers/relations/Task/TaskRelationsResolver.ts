import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Appointment } from "../../../models/Appointment";
import { Doctor } from "../../../models/Doctor";
import { Task } from "../../../models/Task";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Task)
export class TaskRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Doctor, {
    nullable: false
  })
  async doctor(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Doctor> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.findUniqueOrThrow({
      where: {
        id: task.id,
      },
    }).doctor({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Appointment, {
    nullable: true
  })
  async appointment(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Appointment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.findUniqueOrThrow({
      where: {
        id: task.id,
      },
    }).appointment({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
