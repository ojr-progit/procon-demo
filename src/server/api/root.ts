import { createTRPCRouter } from "~/server/api/trpc";
import {fridgeRouter} from "~/server/api/routers/fridgeRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  fridgeRouter: fridgeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
