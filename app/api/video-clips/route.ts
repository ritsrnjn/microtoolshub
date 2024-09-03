import { NextResponse } from 'next/server'

const videoClips = [
    { id: '1', title: 'Cat Toss', youtubeId: '3NFD1eFaf-Q', thumbnail: 'https://img.youtube.com/vi/abcdefghijk/0.jpg' },
    { id: '2', title: 'Jump Cone', youtubeId: 'veQlGPdf87A', thumbnail: 'https://img.youtube.com/vi/lmnopqrstuv/0.jpg' },
    { id: '3', title: 'Golf Spin', youtubeId: '8rpDbGemHk4', thumbnail: 'https://img.youtube.com/vi/wxyzabcdefg/0.jpg' },
    { id: '4', title: 'Cat Toss', youtubeId: '3NFD1eFaf-Q', thumbnail: 'https://img.youtube.com/vi/abcdefghijk/0.jpg' },
    { id: '5', title: 'Jump Cone', youtubeId: 'veQlGPdf87A', thumbnail: 'https://img.youtube.com/vi/lmnopqrstuv/0.jpg' },
    { id: '6', title: 'Golf Spin', youtubeId: '8rpDbGemHk4', thumbnail: 'https://img.youtube.com/vi/wxyzabcdefg/0.jpg' },
    { id: '7', title: 'Cat Toss', youtubeId: '3NFD1eFaf-Q', thumbnail: 'https://img.youtube.com/vi/abcdefghijk/0.jpg' },
    { id: '8', title: 'Jump Cone', youtubeId: 'veQlGPdf87A', thumbnail: 'https://img.youtube.com/vi/lmnopqrstuv/0.jpg' },
    { id: '9', title: 'Golf Spin', youtubeId: '8rpDbGemHk4', thumbnail: 'https://img.youtube.com/vi/wxyzabcdefg/0.jpg' },
    { id: '10', title: 'Cat Toss', youtubeId: '3NFD1eFaf-Q', thumbnail: 'https://img.youtube.com/vi/abcdefghijk/0.jpg' },
    { id: '11', title: 'Jump Cone', youtubeId: 'veQlGPdf87A', thumbnail: 'https://img.youtube.com/vi/lmnopqrstuv/0.jpg' },
    { id: '12', title: 'Golf Spin', youtubeId: '8rpDbGemHk4', thumbnail: 'https://img.youtube.com/vi/wxyzabcdefg/0.jpg' },
    { id: '13', title: 'Cat Toss', youtubeId: '3NFD1eFaf-Q', thumbnail: 'https://img.youtube.com/vi/abcdefghijk/0.jpg' },
    { id: '14', title: 'Jump Cone', youtubeId: 'veQlGPdf87A', thumbnail: 'https://img.youtube.com/vi/lmnopqrstuv/0.jpg' },
    { id: '15', title: 'Golf Spin', youtubeId: '8rpDbGemHk4', thumbnail: 'https://img.youtube.com/vi/wxyzabcdefg/0.jpg' },
    // Add more video clips as needed
]

export async function GET() {
    return NextResponse.json(videoClips)
}