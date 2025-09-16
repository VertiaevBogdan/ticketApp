import BackgroundVideo  from './BackgroundVideo.jsx'
import BarsIcon from "./BarsIcon.jsx";
import api from "../../api/api.js";
import { useState, useEffect} from "react";

function VideoSection() {

    const [featured, setFeatured] = useState(null)

    useEffect( () => {
        api.get('standup/')
            .then(res => {
                const standups = res.data;
                const featuredOne = standups.find(s => s.is_featured === true);
                setFeatured(featuredOne);
            });
    }, []);

    return (
        <section className="flex flex-col relative
                            overflow-hidden rounded-t-3xl
                            h-[100vh] m-[calc(-1*73px-42px)]">
            {featured && <BackgroundVideo standup={featured}/>}
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
                <div className="mb-[18px]">
                    <button className="min-w-[295px] h-min p-3
                     bg-[#801219] rounded-3xl text-[#111111]
                     cursor-pointer">
                        <div className="flex border-2
                                        border-dashed border-[#111111]
                                        rounded-2xl">
                            <div className="px-5 py-4 text-[25px] flex flex-col
                                            font-black border-r-2 border-r-[#111111] border-dashed">
                                <p class="flex flex-col items-center justify-center
                                           hover:text-white transition hover:duration-400">
                                    <b>СМОТРЕТЬ</b>
                                    <br/>
                                    <svg className="max-w-[2.5em]"
                                            xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          fill="currentColor">
                                        <path d="M8 5v14l11-7z"/>
                                        </svg>
                                </p>
                            </div>
                            <div className="pl-[30px] flex items-center">
                                <BarsIcon className="min-h-[107px]"/>
                                <p className="transform rotate-180 spacing
                                              text-[8px] font-medium
                                              ml-2">
                                    420 319</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default VideoSection;