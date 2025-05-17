import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const waitlist = pgTable('waitlist', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  company: varchar('company', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
});

export type Waitlist = typeof waitlist.$inferSelect;
export type NewWaitlist = typeof waitlist.$inferInsert; 