// app/api/counter/route.ts
import { NextResponse } from 'next/server';
import { getCounter, setCounter } from '../../../lib/db';

let inMemoryCount: number = 0;

export async function GET() {
    if (inMemoryCount === 0) {
        inMemoryCount = await getCounter();
    }
    return NextResponse.json({ count: inMemoryCount });
}

export async function POST() {
    inMemoryCount++;

    if (inMemoryCount % 10 === 0) {
        let currentCountInDb = await getCounter();
        if (currentCountInDb < inMemoryCount) {
            inMemoryCount = currentCountInDb;
        }
        await setCounter(inMemoryCount);
    }

    return NextResponse.json({ count: inMemoryCount });
}
