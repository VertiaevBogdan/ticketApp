function BackgroundVideo() {
    return (
        <>
            <video
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-3xl"
                src="../../../public/trailer.mp4"
                autoPlay
                loop
                playsInline
                muted
            />
            <div className="absolute top-[50%] right-0 bottom-0 left-0 bg-gradient-custom"></div>
        </>
    );
}

export default BackgroundVideo;