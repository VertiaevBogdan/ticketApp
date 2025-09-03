

export default function Tour() {
    return (
        <main>
            <div className="flex items-center justify-between text-white text-[12px] max-w-[30em]">
                <div className="flex">
                    <div className="mr-4 flex-col items-center justify-center">
                        <p>FEB</p>
                        <span>28</span>
                    </div>
                    <div className="text-white/40">
                        <p className="text-white">Kuta (Bali)</p>
                        fri,
                        <span className="text-[#801219]">| </span>
                        IC Center
                    </div>
                </div>
                <div>
                    <button className="cursor-pointer hover:bg-black/50">
                        БИЛЕТЫ
                    </button>
                </div>
            </div>
        </main>
    );
}