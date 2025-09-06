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
        <body className="bg-[#0c0c0c]
                        bg-[url('../../public/img/tour/full-bg.png')]
                            bg-contain bg-no-repeat" >
            <main className="flex flex-col justify-center items-center
                            mt-[12%]">
                <img src="../../../public/img/tour/_813.png.webp" alt="813"
                        className="max-w-[28em]"/>
            {tours.map((item) => (
                <div key={item.id} className="flex items-center justify-between
                                            text-white text-[12px] w-[35em] mb-3">
                <div className="flex">
                    <div className="mr-4 pb-1 w-[42px] flex flex-col justify-center items-center bg-no-repeat
                                    bg-center bg-[url('../../public/img/tour/date-bg.png')] bg-contain
                                    h-[42px] rounded-[4px]">
                        <p className="text-[11px] mt-1">{item.month}</p>
                        <span className="text-lg font-bold">{item.month_num_day}</span>
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
                        {item.sold_out ? (
                            <img src="../../../public/img/tour/tickets.png.webp" alt="Buy a ticket"
                                className="max-h-[24px] rounded-[4px]"/>
                        ) : (<img src="../../../public/img/tour/Sold_out.png" alt="Sold out"
                                  className="max-h-[52px] rounded-[4px] hover:shadow-none"/>)}
                    </button>
                </div>
            </div>
            ))}
                <TourFooter/>
            </main>
        </body>
    );
}