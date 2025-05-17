# MantlePay Neon DB Setup

This document outlines how to set up and use Neon DB with Drizzle ORM for the MantlePay waitlist functionality.

## Database Connection

MantlePay uses the `neon-http` driver to connect to Neon's serverless Postgres. This driver is optimized for:

- Serverless environments
- Single, non-interactive transactions
- Fast, lightweight connections over HTTP instead of TCP

The HTTP driver is ideal for our use case where server actions perform individual database operations without maintaining long-lived connections.

## Environment Setup

1. Update the `.env.local` file in the root of your project with your Neon DB credentials:

```
# Database connection for Neon DB
DATABASE_URL="postgresql://[user]:[password]@[hostname]:[port]/[database]?sslmode=require"
```

2. Replace the placeholders with your actual Neon DB credentials:
   - `[user]`: Your Neon DB username
   - `[password]`: Your Neon DB password
   - `[hostname]`: Your Neon DB hostname
   - `[port]`: Your Neon DB port (usually 5432)
   - `[database]`: Your Neon DB database name

## Running Database Migrations

After setting up your environment variables, you can generate and run the database migrations:

1. Generate the SQL migrations:

```bash
npm run db:generate
```

2. Push the changes to your Neon database:

```bash
npm run db:push
```

3. (Optional) Use Drizzle Studio to view and manage your database:

```bash
npm run db:studio
```

## Waitlist Form Functionality

The waitlist form in `components/WaitlistForm.tsx` uses a Next.js server action located in `lib/actions/waitlist.ts`. When a user submits the form, it will:

1. Call the `addToWaitlist` server action with the user's information
2. Save the data to the Neon DB using Drizzle ORM
3. Return a success or error message based on the result

## Database Schema

The waitlist table has the following schema:

- `id`: Serial primary key
- `email`: Unique email address (required)
- `name`: User's name (optional)
- `company`: User's company name (optional)
- `createdAt`: Timestamp of when the entry was created

## Using Server Actions vs API Routes

This implementation uses Next.js server actions instead of API routes:

- Server actions allow you to define server-side functions that can be directly called from client components
- They provide better type safety and a more integrated development experience
- The `'use server'` directive marks the function as a server action
- Server actions automatically handle form submissions and data validation 