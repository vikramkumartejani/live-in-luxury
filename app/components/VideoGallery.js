export default function VideoGallery({ videos }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {videos.map((video) => (
                <div key={video.id} className="bg-gray-100 rounded-lg overflow-hidden">
                    <video
                        src={video.src}
                        controls
                        className="w-full h-64 object-cover"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
        </div>
    )
}

