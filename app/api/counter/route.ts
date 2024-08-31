import { NextResponse } from 'next/server'

let count = 0

export async function GET() {
    return NextResponse.json({ count })
}

export async function POST() {
    count++
    return NextResponse.json({ count })
}