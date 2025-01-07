'use client'

import { useState } from 'react'
import ImageGallery from './ImageGallery'
import VideoGallery from './VideoGallery'

const images = [
    { id: 1, src: '/assets/dream-home.svg', alt: 'Image 1' },
    { id: 2, src: '/assets/dream2.svg', alt: 'Image 2' },
    { id: 3, src: '/assets/dream3.svg', alt: 'Image 3' },
    { id: 4, src: '/assets/dream-home.svg', alt: 'Image 1' },
]

const videos = [
    { id: 1, src: '/assets/video.mp4' },
    { id: 2, src: '/assets/video.mp4' },
    { id: 3, src: '/assets/video.mp4' },
]   

export default function ImagesVideos() {
    const [activeTab, setActiveTab] = useState('images')

    return (
        <div className="mt-6 md:mt-10 max-w-[1440px] w-full mx-auto px-4 md:px-10 lg:px-10 xl:px-24 py-8">
            {/* <h1 className='text-[#1E2A3/8] text-center text-3xl mb-8 font-semibold'>Gallery</h1> */}
            <div className="mb-6 flex items-center justify-center">
                <button
                    className={`px-4 py-3 mr-2 rounded-md font-medium ${activeTab === 'images' ? 'bg-[#E5C49B] text-white' : 'bg-gray-200'
                        }`}
                    onClick={() => setActiveTab('images')}
                >
                    Images
                </button>
                <button
                    className={`px-4 py-3 rounded-md font-medium ${activeTab === 'videos' ? 'bg-[#E5C49B] text-white ' : 'bg-gray-200'
                        }`}
                    onClick={() => setActiveTab('videos')}
                >
                    Videos
                </button>
            </div>
            {activeTab === 'images' ? (
                <ImageGallery images={images} />
            ) : (
                <VideoGallery videos={videos} />
            )}
        </div>
    )
}

