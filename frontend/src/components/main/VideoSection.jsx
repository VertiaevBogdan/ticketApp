import BackgroundVideo  from './BackgroundVideo.jsx'

function VideoSection() {
    return (
        <section className="flex flex-col relative
                            overflow-hidden rounded-t-3xl
                            h-[100vh] m-[calc(-1*73px-42px)]">
            <BackgroundVideo/>
            <div className="bg-gradient-custom"></div>
            <div className="grid grid-flow-col gap-[60px] absolute
                            top-0 right-0 left-0 bottom-auto justify-between
                            h-[515px] items-end py-[38em] px-[6em]">
                <span className="flex flex-col">
                    <div className="text-white/40 ">18+</div>
                    <h1 className="text-white mt-4 text-8xl font-bold">
                        <p className="text-6xl">СТЕНДАП СПЕШЛ</p>
                        ВЕСЕЛАЯ<span className="text-[#801219]">/</span>ЖИЗНЬ
                    </h1>
            </span>
            </div>
        </section>
    );
}

export default VideoSection;