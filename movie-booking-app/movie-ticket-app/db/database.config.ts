import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/singlestore/driver';

let db;

export function database() {
  if (db) {
    return db;
  }
  const pool = new Pool({
    provide: 'postgresql:postgres/abc123@localhost:5432/postgres',
  });
  const drizzle = { client: pool, schema: {} };
}
