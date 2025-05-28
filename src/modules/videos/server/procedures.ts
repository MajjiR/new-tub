import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import {videos  } from "@/db/schema";
import {db  } from "@/db";



export const videosRouter = createTRPCRouter({

    create: protectedProcedure.mutation(async({ctx}) => {
        const {id:userId} = ctx.user;

        const [video] = await db
        .insert(videos)
        .values({
            userId,
            title: "My Video",
            categoryId: "007cd3b6-e7ed-4a3f-81bd-bda816ee60a9",
            createdAt: new Date(),
            updatedAt: new Date(),
            
          }).returning();

        return {
            video:video,
        } 
        
    })
    
});