import {Webhook} from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { EventType } from "svix/dist/api/event_type";
import { eq } from "drizzle-orm";

export async function POST(req:Request) {
       
    const SIGNING_SECRET = process.env.CLERK_SIGNING_SECRET!;

    if(!SIGNING_SECRET) {
        throw new Error("Missing signing CLERK_SIGNING_SECRET");
    }

    const wh = new Webhook(SIGNING_SECRET);

    //GET HEADERS

    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");
    

    if(!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error: Missing Svix Headers', {status: 400});
    }

    //Get Body

    const payload = await req.json();
    const body = JSON.stringify(payload);

    let evt: WebhookEvent;
    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-signature': svix_signature,
            'svix-timestamp': svix_timestamp,
            
        }) as WebhookEvent;
    } catch (error) {
        console.error("Error verifying webhook event:", error);
        return new Response("Error verifying webhook event", {status: 400});
    }

    //Do somethign with payload
    //for this guide, log paylaod to console

   
    const eventType = evt.type;

if (eventType === "user.created") {
  const { data } = evt;

  try {
    await db.insert(users).values({
      clerkId: data.id,
      name: data.first_name ?? "unknown",
      imageUrl: data.image_url ?? "",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (err) {
    console.error("DB insert error:", err);
    return new Response("DB insert error", { status: 500 });
  }
}

 

if (eventType==="user.deleted") {
    
    const {data} = evt;

    try {

        if(!data.id) {
            return new Response("Missing user id", {status: 400});

        }

    await db.delete(users).where(eq(users.clerkId, data.id));

    } catch (err) {
        console.error("DB delete error:", err);
        return new Response("DB delete error", { status: 500 });
    }


     

    






}

if (eventType === "user.updated") {

    const {data} = evt;

    await db.update(users).set({
        clerkId: data.id,
        name: data.first_name ?? "unknown",
        imageUrl: data.image_url ?? "",
        updatedAt: new Date(),
      }).where(eq(users.clerkId, data.id));


    
    
}


return new Response("Webhook processed", {status: 200});



}

    
