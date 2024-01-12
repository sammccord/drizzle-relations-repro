import { relations } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("User", {
  id: text("id").notNull().primaryKey(),
});

export const userRelations = relations(users, ({ many }) => ({
  credentials: many(credentials),
}));

export const credentials = sqliteTable("Credential", {
  id: text("id").notNull().primaryKey(),
  userId: text("userId")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
});

export const credentialRelations = relations(credentials, ({ one }) => ({
  user: one(users, {
    fields: [credentials.userId],
    references: [users.id],
  }),
}));
