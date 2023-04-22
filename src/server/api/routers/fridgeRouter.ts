import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export const fridgeRouter = createTRPCRouter({
  getAlleFridgeItems: publicProcedure
      .input(z.object({
            fridgeId: z.number()
          })
      )
    .query(async ( { input, ctx }) => {
        const allItems = await ctx.prisma.fridgeItem.findMany({
            where: {
                fridgeId: input.fridgeId
            }
        })

        return allItems
    })
    ,

     addFridgeItem: publicProcedure
        .input(z.object({
                    fridgeId: z.number(),
                    name : z.string(),
                    quantity: z.number(),
            })).mutation(async ({ input, ctx }) => {
            const res =  await ctx.prisma.fridgeItem.create({
                data: {
                    fridgeId: input.fridgeId,
                    name: input.name,
                    quantity: input.quantity
                }
            })

             return res;

        }),







});
