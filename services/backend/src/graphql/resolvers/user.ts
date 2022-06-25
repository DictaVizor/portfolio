import { User } from "@/prisma/generated/type-graphql";
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Context } from "@/src/context";
import {hash} from "bcrypt"


@InputType()
export class RegisterInput {
    @Field()
    email: string;

    @Field()
    password: string;
}

@Resolver(of => User)
export class CustomUserResolver {
    @Query(returns => User)
    async me(@Ctx() ctx: Context) {
        try {
            return await ctx.prisma.user.findUnique({
                where: {
                    id: ctx.user?.id
                }
            })
        } catch(error) {
            throw new Error("Not logged in")
        }
    }

    @Mutation(returns => User)
    async register(@Arg("input") registerInput: RegisterInput, @Ctx() ctx: Context) {
        const hashedPassword = await hash(registerInput.password, 12)

        await ctx.prisma.user.create({
            data: {
                email: 
            }
        })
    }
}