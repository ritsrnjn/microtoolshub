// app/api/counter/route.ts
import { NextResponse } from 'next/server';
import { getCounter, setCounter } from '../../../lib/db';
import { log } from 'console';

let inMemoryCount: number = 0;

export async function GET() {
    if (inMemoryCount === 0) {
        inMemoryCount = await getCounter();
        log('Fetched counter from database:', inMemoryCount);
    }
    return NextResponse.json({ count: inMemoryCount });
}

export async function POST() {
    inMemoryCount++;

    if (inMemoryCount % 10 === 0) {
        let currentCountInDb = await getCounter();
        if (inMemoryCount < currentCountInDb) {
            inMemoryCount = currentCountInDb;
        }
        await setCounter(inMemoryCount);
    }

    return NextResponse.json({ count: inMemoryCount });
}
