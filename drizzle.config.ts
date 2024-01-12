import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./migrations",
  verbose: true,
  strict: true,
  driver: "libsql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
