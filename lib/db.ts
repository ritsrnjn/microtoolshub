// lib/db.ts
import { sql } from '@vercel/postgres';

export async function getCounter(): Promise<number> {
    try {
        const result = await sql`SELECT count FROM counter LIMIT 1`;
        if (result.rows.length > 0) {
            return result.rows[0].count;
        } else {
            // Initialize the counter in the database if it doesn't exist
            await sql`INSERT INTO counter (count) VALUES (0)`;
            return 0;
        }
    } catch (error) {
        console.error('Error fetching counter from database:', error);
        throw error;
    }
}

export async function setCounter(count: number): Promise<void> {
    try {
        await sql`UPDATE counter SET count = ${count}`;
    } catch (error) {
        console.error('Error updating counter in database:', error);
        throw error;
    }
}