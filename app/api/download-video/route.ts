import { NextRequest, NextResponse } from 'next/server';
import ytdl from 'ytdl-core';

export async function POST(req: NextRequest) {
    try {
        const { url } = await req.json();

        if (!url || !ytdl.validateURL(url)) {
            return NextResponse.json({ message: 'Invalid YouTube URL' }, { status: 400 });
        }

        const info = await ytdl.getInfo(url);
        const format = ytdl.chooseFormat(info.formats, { quality: 'highestvideo' });
        // const title = info.videoDetails.title.replace(/[^a-zA-Z0-9]/g, '_');
        const title = info.videoDetails.title;

        const headers = new Headers({
            'Content-Disposition': `attachment; filename="${title}.mp4"`,
            'Content-Type': 'video/mp4',
            'X-Youtube-Identity-Token': 'QUFFLUhqbTRJRE9BR1ZEQlNweVotaHRhQmhVdTZRN2ZyUXw=',
        });

        const readableStream = ytdl(url, { format });

        return new NextResponse(readableStream as unknown as ReadableStream, { headers });
    } catch (error) {
        console.error('Error downloading video:', error);
        return NextResponse.json({ message: 'Error downloading video' }, { status: 500 });
    }
}
