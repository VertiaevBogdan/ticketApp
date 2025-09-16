import {useParams} from "react-router";
import {useState, useEffect} from "react";
import api from "../../api/api.js";

export default function StandupDescription() {

    const {slug} = useParams();
    const [standupInfo, setStandupInfo] = useState([]);

    useEffect(() => {
        api.get(`standup/${slug}/`)
            .then(res => setStandupInfo(res.data))
            .catch(err => console.log(err))
    }, [slug]);

    return (
        <section className="grid grid-flow-col items-start border border-white/40 rounded-3xl
                            p-[55px] text-lg gap-14 min-h-[378px]">
               <>
                 <div className="w-[200px] h-[200px]">
                    <img src={standupInfo.image}
                         alt="" className="w-[200px] h-[266px] shadow-[rgb(10, 10, 10)_0px_4px_32px_0px]
                                            rounded-3xl card-shadow"/>
                </div>
                <div className="card-description-grid">
                    <h3 className="text-white/40 mb-2.5 leading-[1.05] title1">продолжительность</h3>
                    <span className="text-white">{standupInfo.duration}</span>
                    <h3 className="text-white/40 mb-2.5 leading-[1.05] title2">дата выхода</h3>
                    <span className="text-white">{standupInfo.created_at}</span>
                    <h3 className="text-white/40 mb-2.5 leading-[1.05] title3">город</h3>
                    <span className="text-white">{standupInfo.city}</span>
                    <h3 className="text-white/40 mb-2.5 leading-[1.05] title4">субтитры</h3>
                    <span className="text-white">{standupInfo.subtitles}</span>
                    <span className="text-white/40 mt-10 mb-[10px]">описание</span>
                    <p className="grid-text text-white">{standupInfo.description}</p>
                </div>
               </>
        </section>
    );
}