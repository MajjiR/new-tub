
import { pgTable, text, timestamp, uuid, uniqueIndex } from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";

export const users = pgTable("users", {

    id: uuid("id").primaryKey().defaultRandom(),
    clerkId: text("clerk_id").unique().notNull(),
    name: text("name").notNull(),
    imageUrl:text("image_url").notNull(),
    createdAt:timestamp("created_at").notNull(),
    updatedAt:timestamp("updated_at").notNull(),


}, (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)]);


export const userRelations = relations(users, ({many}) => ({
    videos:many(videos),
}))


export const categories = pgTable("categories", {
    id: uuid("id").primaryKey().defaultRandom(),
    name:text("name").notNull().unique(),
    description:text("description"),
    createdAt:timestamp("created_at").notNull(),
    updatedAt:timestamp("updated_at").notNull(),
}, (t) => [uniqueIndex("name_idx").on(t.name)]);

export const videos = pgTable("videos", {
    id: uuid("id").primaryKey().defaultRandom(),
    title:text("title").notNull(),
    description:text("description"),
    createdAt:timestamp("created_at").notNull(),
    updatedAt:timestamp("updated_at").notNull(),
    userId:uuid("user_id").references(() => users.id, {
        onDelete: "cascade",
    }).notNull(),
    categoryId:uuid("category_id").references(() => categories.id).notNull(),
    
});

export const videoRelations = relations(videos, ({one}) => ({
    user:one(users, {
        fields: [videos.userId],
        references: [users.id],
    }),
    
    
}))