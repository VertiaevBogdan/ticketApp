import {useState, useEffect} from "react";
import api from "../../api/api.js";

export default function StandupDescription() {


    const [card, setCard] = useState([])

    useEffect(() => {
        api.get('standup/')
            .then(res => setCard(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <section className="grid grid-flow-col items-start border border-white/40 rounded-3xl
                            p-[55px] text-lg gap-14">
            {/*{card.map((items) => (*/}
               <>
                 <div className="w-[200px] h-[200px]">
                    <img src="../../../public/img/blagotvoritelnyi-v.jpg"
                         alt="" className="w-[200px] h-[266px] shadow-[rgb(10, 10, 10)_0px_4px_32px_0px]
                                            rounded-3xl card-shadow"/>
                </div>
                <div className="card-description-grid">
                    <h3 className="text-white/40 mb-2.5 leading-[1.05] title1">продолжительность</h3>
                    <span className="text-white">dadadad</span>
                    <h3 className="text-white/40 mb-2.5 leading-[1.05] title2">дата выхода</h3>
                    <span className="text-white">dadadad</span>
                    <h3 className="text-white/40 mb-2.5 leading-[1.05] title3">город</h3>
                    <span className="text-white">dadadad</span>
                    <h3 className="text-white/40 mb-2.5 leading-[1.05] title4">субтитры</h3>
                    <span className="text-white">dadadad</span>
                    <span className="text-white/40 mt-10 mb-[10px]">описание</span>
                    <p className="grid-text text-white">
                        То самое легендарное выступление из Ледового дворца, которое
                        навсегда изменило мою жизнь. Огромный стадион, с которого звучали вещи,
                        которые в то время никто не решался говорить так открыто на такую большую
                        аудиторию в России. Выступление и концовку с “последней сигаретой” я посвятил
                        своему дедушке, который скончался в том году. Этот концерт снимал Эдгар Дубровский,
                        который в последствии снимет нашумевшую документалку для Netflix “Аферист из Tinder”.
                    </p>
                </div>
               </>
            {/*))}*/}
        </section>
    );
}