import { z } from 'zod';
import { protectedProcedure, createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      
      console.log("This is a trpc base procedure")
      return {
        
        greeting: `hello ${opts.input.text} ${opts.ctx.user.name} ${JSON.stringify(opts.ctx.user)}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;