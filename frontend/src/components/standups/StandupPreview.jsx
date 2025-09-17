import YouTubeModal from "./YouTubeModal.jsx";

export default function StandupPreview({standup}) {
    return(
        <section className="flex flex-col relative overflow-hidden
                            h-[100vh] mt-[-73px] mx-[-42px]">
            <div className="absolute flex inset-0 items-center
             bg-center bg-cover  bg-no-repeat w-[1440px] animate-toCenter"
            style={{ backgroundImage: `url(${standup.preview})` }}>
                <div className="bg-gradient-custom"></div>
            </div>
            <div className="absolute grid grid-flow-col justify-between gap-[60px] items-end
                            bottom-0 w-full py-[clamp(20px,6vh,43px)] px-[42px] animate-floatUp">
                <span className="flex flex-col mb-6">
                    <div className="text-white/40 text-[20px] font-medium">18+</div>
                    <h1 className="mt-4 text-[96px] leading-[1.05] font-bold">
                        <p className="text-white text-[0.665em]">СТЕНДАП</p>
                        <span className="text-[#801219]">{standup.title}</span>
                    </h1>
                </span>
            </div>
            <YouTubeModal standup={standup}/>
        </section>
    );
}