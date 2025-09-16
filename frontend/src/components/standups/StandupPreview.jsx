export default function StandupPreview({standup}) {
    return(
        <section className="flex flex-col relative overflow-hidden">
            <div className="absolute flex inset-0 items-center ">
                <div className="bg-gradient-custom"></div>
            </div>
            <div className="grid grid-flow-col justify-between gap-[60px] items-end
                            w-[1440px] h-[720px] bg-center bg-cover bg-no-repeat"
                 style={{ backgroundImage: `url(${standup.preview})` }}>

            </div>
        </section>
    );
}