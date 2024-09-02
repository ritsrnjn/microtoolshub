// lib/db.ts
import { sql } from '@vercel/postgres';

export async function getCounter(): Promise<number> {
    try {
        const result = await sql`SELECT value FROM counter where id = 1`;
        if (result.rows.length > 0) {
            return result.rows[0].value;
        }
        return 0;
    } catch (error) {
        console.error('Error fetching counter from database:', error);
        throw error;
    }
}

export async function setCounter(count: number): Promise<void> {
    try {
        await sql`UPDATE counter SET value = ${count} WHERE id = 1`;
    } catch (error) {
        console.error('Error updating counter in database:', error);
        throw error;
    }
}