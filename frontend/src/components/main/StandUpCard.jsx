function VideoCard({ video }) {
    return (
        <a
            href={video.video_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl shadow hover:shadow-lg transition transform hover:scale-105"
        >
            <img
                src={video.thumbnail_url}
                alt={video.title}
                className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-3">
                <h3 className="text-lg font-semibold">{video.title}</h3>
            </div>
        </a>
    );
}

export default VideoCard;