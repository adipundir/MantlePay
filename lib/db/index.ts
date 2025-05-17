import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { sql } from 'drizzle-orm';
import * as schema from './schema';

// Create a SQL connection with the neon HTTP driver (better for serverless environments)
// HTTP driver is recommended for single, non-interactive transactions in serverless environments
const sqlClient = neon(process.env.DATABASE_URL!);

// Create a Drizzle ORM instance
export const db = drizzle(sqlClient, { schema });

// Export sql for raw queries and sqlClient for direct Neon access
export { sql, sqlClient };

