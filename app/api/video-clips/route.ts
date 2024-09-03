import { NextResponse } from 'next/server'

const videoClips = [
    { id: '1', title: 'Small Rope', youtubeId: 'YYs37jahMn0', thumbnail: 'https://img.youtube.com/vi/abcdefghijk/0.jpg' },
    { id: '2', title: 'Ninja Kick', youtubeId: '_L_1IQ5wSz0', thumbnail: 'https://img.youtube.com/vi/lmnopqrstuv/0.jpg' },
    { id: '3', title: 'Giant Axe', youtubeId: '2TrmNsrBS7s', thumbnail: 'https://img.youtube.com/vi/wxyzabcdefg/0.jpg' },

    { id: '4', title: 'Javelin mini', youtubeId: 'dniZziMH2Ec', thumbnail: 'https://img.youtube.com/vi/abcdefghijk/0.jpg' },
    { id: '5', title: 'Jurrasic scene', youtubeId: 'bD_vtCn8D1E', thumbnail: 'https://img.youtube.com/vi/lmnopqrstuv/0.jpg' },
    { id: '6', title: 'Kick bottle', youtubeId: 'GUfqph5PMuw', thumbnail: 'https://img.youtube.com/vi/wxyzabcdefg/0.jpg' },
    { id: '7', title: 'Skateboard fail', youtubeId: 'mvoSRItU4Gg', thumbnail: 'https://img.youtube.com/vi/abcdefghijk/0.jpg' },


    // { id: '8', title: 'Jump Cone', youtubeId: 'veQlGPdf87A', thumbnail: 'https://img.youtube.com/vi/lmnopqrstuv/0.jpg' },
    // { id: '9', title: 'Golf Spin', youtubeId: '8rpDbGemHk4', thumbnail: 'https://img.youtube.com/vi/wxyzabcdefg/0.jpg' },
    // { id: '10', title: 'Cat Toss', youtubeId: '3NFD1eFaf-Q', thumbnail: 'https://img.youtube.com/vi/abcdefghijk/0.jpg' },

    { id: '11', title: 'Trashbag Fail', youtubeId: '9uGMlLX7d6I', thumbnail: 'https://img.youtube.com/vi/lmnopqrstuv/0.jpg' },

    // { id: '12', title: 'Golf Spin', youtubeId: '8rpDbGemHk4', thumbnail: 'https://img.youtube.com/vi/wxyzabcdefg/0.jpg' },
    { id: '13', title: 'Cat Toss', youtubeId: '3NFD1eFaf-Q', thumbnail: 'https://img.youtube.com/vi/abcdefghijk/0.jpg' },
    { id: '14', title: 'Couch Airbag', youtubeId: 'Frvift1styU', thumbnail: 'https://img.youtube.com/vi/lmnopqrstuv/0.jpg' },
    { id: '15', title: 'Parkour', youtubeId: 'PpeRgZyZ1og', thumbnail: 'https://img.youtube.com/vi/wxyzabcdefg/0.jpg' },



]

export async function GET() {
    return NextResponse.json(videoClips)
}