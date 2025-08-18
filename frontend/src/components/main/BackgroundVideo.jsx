function BackgroundVideo() {
    return (
        <div class="flex  items-center justify-center">
            <video
                className="absolute top-0 left-0 w-full h-[95vh] object-cover overflow-hidden rounded-t-3xl"
                src="../../../public/trailer.mp4"
                autoPlay
                loop
                playsInline
                muted
            />
            {/*<div className="absolute bottom-10 left-0 right-0 h-1/2 bg-gradient-to-t from-[#111111] to-transparent"></div>*/}
        </div>
    );
}

export default BackgroundVideo;