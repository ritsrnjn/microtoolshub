"use client"

import { useState, useEffect } from 'react'
import { Video, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ToolLayout } from '@/components/ToolLayout'
import { ToolCard } from '@/components/ToolCard'

interface VideoClip {
    id: string;
    title: string;
    youtubeId: string;
    thumbnail: string;
}

export default function ReelsHooksGalleryPage() {
    const [videoClips, setVideoClips] = useState<VideoClip[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<VideoClip | null>(null);
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
        <ToolLayout
            title="Reels Hooks Gallery"
            description="Browse and watch short video clips for social media reels"
            icon={Video}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoClips.map((clip) => (
                    <ToolCard key={clip.id} title={clip.title} icon={Video}>
                        <div className="aspect-video relative group cursor-pointer" onClick={() => setSelectedVideo(clip)}>
                            <img
                                src={clip.thumbnail}
                                alt={clip.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Video className="w-12 h-12 text-white" />
                            </div>
                        </div>
                        <Button
                            onClick={() => window.open(`https://www.youtube.com/shorts/${clip.youtubeId}`, '_blank')}
                            className="mt-2 w-full"
                            variant="outline"
                        >
                            <Video className="w-4 h-4 mr-2" />
                            Watch on YouTube
                        </Button>
                    </ToolCard>
                ))}
            </div>

            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-3xl w-full">
                        <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                            title={selectedVideo.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                        <div className="mt-4 flex justify-between items-center">
                            <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
                            <Button onClick={() => setSelectedVideo(null)} variant="outline">
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </ToolLayout>
    )
}