

export default function Tour() {
    return (
        <main className="flex justify-center">
            <div className="flex items-center justify-between text-white text-[12px] w-[35em]">
                <div className="flex">
                    <div className="mr-4 p-2 flex-col items-center justify-center
                                    bg-center bg-[url('../../public/img/tour/date-bg.png')] bg-cover
                                     w-[42] h-[42px] rounded-[4px]">
                        <p>FEB</p>
                        <span>28</span>
                    </div>
                    <div className="text-white/40">
                        <p className="text-white">Kuta (Bali)</p>
                        fri,
                        <span className="text-[#801219]"> | </span>
                        IC Center
                    </div>
                </div>
                <div>
                    <button className="cursor-pointer hover:bg-black/50">
                        <img src="../../../public/img/tour/tickets.png.webp" alt=""
                                className="max-h-[24px] rounded-[4px]"/>
                    </button>
                </div>
            </div>
        </main>
    );
}