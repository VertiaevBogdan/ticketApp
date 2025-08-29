function  BackgroundVideo() {
    return (
        <div className="absolute inset-0 flex items-center justify-center
                            overflow-hidden rounded-t-3xl">
                <video
                src="../../../public/trailer.mp4"
                autoPlay
                loop
                playsInline
                muted
            />
        </div>
    );
}

export default BackgroundVideo;