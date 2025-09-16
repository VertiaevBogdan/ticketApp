export default function StandupPreview({standup}) {
    return(
        <section className="flex flex-col relative overflow-hidden
                            h-[100vh] mt-[-73px] mx-[-42px]">
            <div className="absolute flex inset-0 items-center
             bg-center bg-cover bg-no-repeat w-[1440px] "
            style={{ backgroundImage: `url(${standup.preview})` }}>
                <div className="bg-gradient-custom"></div>
            </div>
            <div className="grid grid-flow-col justify-between gap-[60px] items-end
                           ">

            </div>
        </section>
    );
}