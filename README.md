`curl -fsSL https://bun.sh/install | bash`

`bun install`

`bunx drizzle-kit generate:sqlite`

`bun run src/migrate.ts`

verify tables have migrated, should see `User` and `Credential` table

`bunx drizzle-kit studio`

run test script, should insert a user, credential, then find the user it inserted with their credentials

`npx tsm ./src/test:sqlite.ts`

should run successfully and see

```sh
sammccord  ~/work/test   v18.17.0  ♥ 16:07  npx tsm src/test:sqlite.ts
(node:33183) ExperimentalWarning: Custom ESM Loaders is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:33183) DeprecationWarning: Obsolete loader hook(s) supplied and will be ignored: getFormat, transformSource
{
  id: '0.7703659968637506',
  credentials: [ { id: '0.17781315078502158', userId: '0.7703659968637506' } ]
}
```

`bun run ./src/test:bun.ts`

```sh
sammccord  ~/work/test   v18.17.0  ♥ 16:04  bun run src/test:bun.ts
135 |     return this.prepare(true).get(placeholderValues);
136 |   };
137 |   values = (placeholderValues) => {
138 |     return this.prepare(true).values(placeholderValues);
139 |   };
140 |   async execute() {
                        ^
SQLiteError: UNIQUE constraint failed: Credential.id
 errno: 1555
  code: "SQLITE_CONSTRAINT_PRIMARYKEY"

      at #run (bun:sqlite:96:13)
      at execute (/Users/sammccord/work/test/node_modules/drizzle-orm/sqlite-core/query-builders/insert.js:140:19)
      at then (/Users/sammccord/work/test/node_modules/drizzle-orm/query-promise.js:21:12)
```
