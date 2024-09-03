"use client"

import { useState, useEffect, useRef } from 'react'
import { Video, Pause, Play, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ToolLayout2 } from '@/components/ToolLayout2'
import { url } from 'inspector'

interface VideoClip {
    id: string;
    title: string;
    youtubeId: string;
    thumbnail: string;
}

// const ReelCard = ({ clip }: { clip: VideoClip }) => {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const videoRef = useRef<HTMLIFrameElement>(null);

//     const togglePlayPause = () => {
//         if (videoRef.current) {
//             const iframe = videoRef.current;
//             const message = isPlaying ? '{"event":"command","func":"pauseVideo","args":""}' : '{"event":"command","func":"playVideo","args":""}';
//             iframe.contentWindow?.postMessage(message, '*');
//             setIsPlaying(!isPlaying);
//         }
//     };

//     const handleDownload = () => {
//         // This is a placeholder function. In a real application, you would implement
//         // the actual download functionality here, potentially using a server-side API.
//         console.log(`Downloading video: ${clip.title}`);
//         alert(`Downloading ${clip.title}. This is a placeholder for the actual download functionality.`);
//     };



//     return (
//         <div className="flex flex-col space-y-2">
//             <h3 className="text-lg font-semibold line-clamp-1">{clip.title}</h3>
//             <div className="group relative aspect-[9/16] overflow-hidden rounded-lg shadow-lg w-full max-h-[640px]">
//                 <iframe
//                     ref={videoRef}
//                     width="100%"
//                     height="100%"
//                     src={`https://www.youtube.com/embed/${clip.youtubeId}?enablejsapi=1&autoplay=1&mute=1&controls=0&loop=1&playlist=${clip.youtubeId}`}
//                     title={clip.title}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div
//                     className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
//                     onClick={togglePlayPause}
//                 >
//                     <div className="flex items-center justify-center flex-grow">
//                         {isPlaying ? (
//                             <Pause className="w-16 h-16 text-white opacity-80" />
//                         ) : (
//                             <Play className="w-16 h-16 text-white opacity-80" />
//                         )}
//                     </div>
//                 </div>
//             </div>
//             <Button
//                 onClick={handleDownload}
//                 className="w-full flex items-center justify-center"
//                 variant="outline"
//             >
//                 <Download className="w-4 h-4 mr-2" />
//                 Download
//             </Button>


//         </div>
//     );
// };




const ReelCard = ({ clip }: { clip: VideoClip }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const videoRef = useRef<HTMLIFrameElement>(null);

    const togglePlayPause = () => {
        if (videoRef.current) {
            const iframe = videoRef.current;
            const message = isPlaying ? '{"event":"command","func":"pauseVideo","args":""}' : '{"event":"command","func":"playVideo","args":""}';
            iframe.contentWindow?.postMessage(message, '*');
            setIsPlaying(!isPlaying);
        }
    };

    const handleDownload = () => {
        // Using a third-party service to download YouTube videos
        const downloadUrl = `https://www.y2mate.com/youtube/${clip.youtubeId}`;
        window.open(downloadUrl, '_blank');
        setIsDownloading(false);
    };

    return (
        <div className="flex flex-col space-y-2 w-full">
            <h3 className="text-lg font-semibold line-clamp-1">{clip.title}</h3>
            <div className="group relative aspect-[9/16] overflow-hidden rounded-lg shadow-lg w-full">
                <iframe
                    ref={videoRef}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${clip.youtubeId}?enablejsapi=1&autoplay=1&mute=1&controls=0&loop=1&playlist=${clip.youtubeId}`}
                    title={clip.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={togglePlayPause}
                >
                    <div className="flex items-center justify-center flex-grow">
                        {isPlaying ? (
                            <Pause className="w-16 h-16 text-white opacity-80" />
                        ) : (
                            <Play className="w-16 h-16 text-white opacity-80" />
                        )}
                    </div>
                </div>
            </div>
            <Button
                onClick={handleDownload}
                className="w-full flex items-center justify-center"
                variant="outline"
                disabled={isDownloading}
            >
                {isDownloading ? (
                    <>
                        <span className="animate-spin mr-2">⏳</span>
                        Downloading...
                    </>
                ) : (
                    <>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                    </>
                )}
            </Button>
        </div>
    );
};























export default function ReelsHooksGalleryPage() {
    const [videoClips, setVideoClips] = useState<VideoClip[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchVideoClips();
    }, []);

    const fetchVideoClips = async () => {
        try {
            const response = await fetch('/api/video-clips');
            if (!response.ok) {
                throw new Error('Failed to fetch video clips');
            }
            const data = await response.json();
            setVideoClips(data);
            setIsLoading(false);
        } catch (err) {
            setError('Error loading video clips. Please try again later.');
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <ToolLayout2
            title="Reels Hooks Gallery"
            description="Browse and watch short video clips for social media reels"
            icon={Video}
        >
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {videoClips.map((clip) => (
                    <div key={clip.id} className="w-full max-w-[360px] mx-auto px-4">
                        <ReelCard clip={clip} />
                    </div>
                ))}
            </div>
        </ToolLayout2>
    )
}