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
sammccord  …/test   main    v18.17.0  ♥ 16:17  npx tsm ./src/test:sqlite.ts
(node:34287) ExperimentalWarning: Custom ESM Loaders is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:34287) DeprecationWarning: Obsolete loader hook(s) supplied and will be ignored: getFormat, transformSource
{
  id: '0.704631150727792',
  credentials: [ { id: '0.2095886726136571', userId: '0.704631150727792' } ]
}
```

`bun run ./src/test:bun.ts`

```sh
sammccord  …/test   main    v18.17.0  ♥ 16:17  bun run ./src/test:bun.ts
271 |         tablesConfig,
272 |         tablesConfig[selectionItem.relationTableTsKey],
273 |         subRows,
274 |         selectionItem.selection,
275 |         mapColumnValue
276 |       ) : subRows.map(
                ^
TypeError: undefined is not an object (evaluating 'subRows.map')
      at mapRelationalRow (/Users/sammccord/work/test/node_modules/drizzle-orm/relations.js:276:11)
      at map (:1:21)
      at /Users/sammccord/work/test/node_modules/drizzle-orm/sqlite-core/query-builders/query.js:100:22
      at execute (/Users/sammccord/work/test/node_modules/drizzle-orm/sqlite-core/query-builders/query.js:133:19)
      at then (/Users/sammccord/work/test/node_modules/drizzle-orm/query-promise.js:21:12)
```
