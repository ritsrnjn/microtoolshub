import { NextResponse } from 'next/server'

const videoClips = [
    { id: '1', title: 'Cat Toss', youtubeId: '3NFD1eFaf-Q', thumbnail: 'https://img.youtube.com/vi/abcdefghijk/0.jpg' },
    { id: '2', title: 'Jump Cone', youtubeId: '3NFD1eFaf-Q', thumbnail: 'https://img.youtube.com/vi/lmnopqrstuv/0.jpg' },
    { id: '3', title: 'Golf Spin', youtubeId: '3NFD1eFaf-Q', thumbnail: 'https://img.youtube.com/vi/wxyzabcdefg/0.jpg' },
    // Add more video clips as needed
]

export async function GET() {
    return NextResponse.json(videoClips)
}