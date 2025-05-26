import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
    "Cars and Vehicles",
    "Education",
    "Entertainment",    
    "Gaming",
    "Gadgets",
    "Mobile Phones",
    "Laptops",
    "Smartphones",
    "Electronics",
    "Clothing",
    "Books",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Sports & Fitness",
    "Automotive",
    "Toys & Games",
    "Health & Wellness",
    "Home & Garden",
    "Home & Living",
    "Home & Decor",
    "Home & Office",
    "overload test"
];

async function main() {

    console.log("seeing categoires...")

    try {

        const values = categoryNames.map((name) => ({
           name,
           description: `Videos Related to ${name}`,
           createdAt: new Date(),
           updatedAt: new Date(),
        }));

        await db.insert(categories).values(values);

        

        console.log("Seeded categories successfully");

    } catch (error) {
        console.error("Error seeding categories:", error);
        process.exit(1);
    }
    
}

main();
