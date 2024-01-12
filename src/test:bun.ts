import "dotenv/config";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schema from "./schema";

const client = new Database(process.env.DATABASE_URL);
const db = drizzle(client, { schema });

const id = `${Math.random()}`;

await db.transaction(async (tx) => {
  await tx.insert(schema.users).values({
    id,
  });
  await tx.insert(schema.credentials).values({
    id: `${Math.random()}`,
    userId: id,
  });
});

const user = await db.query.users.findFirst({
  where: (users, { eq }) => eq(users.id, id),
  with: {
    credentials: true,
  },
});

console.log(user);

client.close();
