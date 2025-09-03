import api from '../../api/api.js'
import { useEffect, useState } from "react";
import TourFooter from "./TourFooter.jsx";


export default function Tour() {

    const [tours, setTours] = useState([])

    useEffect( () => {
        api.get('standupTour/')
            .then(res => setTours(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <main className="flex flex-col justify-center items-center">
            {tours.map((item) => (
                <div key={item.id} className="flex items-center justify-between
                                            text-white text-[12px] w-[35em] mb-3">
                <div className="flex">
                    <div className="mr-4 p-2 flex-col items-center justify-center
                                    bg-center bg-[url('../../public/img/tour/date-bg.png')] bg-cover
                                     w-[42] h-[42px] rounded-[4px]">
                        <p>{item.month}</p>
                        <span>{item.month_num_day}</span>
                    </div>
                    <div className="text-white/40">
                        <p className="text-white">{item.city}</p>
                        {item.additional_day_and_time}
                        <span className="text-[#801219]"> | </span>
                        {item.additional_place_info}
                    </div>
                </div>
                <div>
                    <button className="cursor-pointer hover:bg-black/50">
                        <img src="../../../public/img/tour/tickets.png.webp" alt=""
                                className="max-h-[24px] rounded-[4px]"/>
                    </button>
                </div>
            </div>
            ))}
        </main>
    );
}