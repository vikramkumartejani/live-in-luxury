export default function ImageGallery({ images }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
                <div key={image.id} className="bg-gray-100 rounded-lg overflow-hidden">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-56 object-cover"
                    />
                </div>
            ))}
        </div>
    )
}

