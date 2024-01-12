import "dotenv/config";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";
import * as schema from "./schema";

const client = new Database(process.env.DATABASE_URL);
const db = drizzle(client, { schema });

migrate(db, { migrationsFolder: "./migrations" });

client.close();
