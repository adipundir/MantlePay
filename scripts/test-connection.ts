// This script can be run with: npx tsx scripts/test-connection.ts
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { sql } from 'drizzle-orm';
import { waitlist } from '../lib/db/schema';

async function main() {
  // Check if DATABASE_URL is set
  if (!process.env.DATABASE_URL) {
    console.error('❌ Error: DATABASE_URL environment variable is not set!');
    console.log('Please set it with your Neon database connection string.');
    console.log('Example: DATABASE_URL="postgresql://[user]:[password]@[hostname]:[port]/[database]?sslmode=require"');
    process.exit(1);
  }

  console.log('🔍 Attempting to connect to Neon database...');
  
  try {
    // Create a SQL connection
    const sqlClient = neon(process.env.DATABASE_URL);
    
    // Create a Drizzle ORM instance
    const db = drizzle(sqlClient);
    
    // Try to query the database
    console.log('✅ Connection successful! Querying the database...');
    
    // Get the count of waitlist entries - using proper count syntax
    const result = await db.select({
      count: sql`count(*)`
    }).from(waitlist);
    
    console.log(`✅ Database query successful! You have ${result[0].count} entries in your waitlist table.`);
    
    console.log('🎉 All tests passed! Your database connection is working properly.');
  } catch (error) {
    console.error('❌ Error connecting to the database:', error);
    console.log('Please check your DATABASE_URL and make sure your Neon database is accessible.');
  }
}

main(); 