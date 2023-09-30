"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const sqlite_core_1 = require("drizzle-orm/sqlite-core");
exports.todos = (0, sqlite_core_1.sqliteTable)("todos", {
    id: (0, sqlite_core_1.integer)("id").primaryKey().notNull(),
    title: (0, sqlite_core_1.text)("title").notNull(),
    completed: (0, sqlite_core_1.integer)("completed", { mode: "boolean" }).notNull(),
    createdAt: (0, sqlite_core_1.text)("created_at")
        .default((0, drizzle_orm_1.sql) `CURRENT_TIMESTAMP`)
        .notNull(),
    updatedAt: (0, sqlite_core_1.text)("updated_at")
        .default((0, drizzle_orm_1.sql) `CURRENT_TIMESTAMP`)
        .notNull(),
});
