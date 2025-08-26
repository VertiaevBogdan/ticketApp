import { useEffect, useState } from "react";
import api from '../../api/api.js'
import StandUpCard from "./StandUpCard.jsx";

function StandUpList() {

    const [standups, setStandups] = useState([]);

    useEffect(() => {
        api.get('standupCards/')
            .then(res => setStandups(res.data))
            .catch(err => console.error(err));
    }, []);


    return (
        <section class="w-full mb-[100px]">
            <div class="border-top-line"></div>
            <p className="text-[2.8rem] font-bold text-[#801219] mb-[1.5rem]">предыдущие стендапы</p>
            <div className="grid grid-flow-col">
                {standups.map(item => (
                    <a href="#" className="cursor-pointer">
                        <div key={item.id} className="h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <h2 className="text-xl font-bold">{item.title}</h2>
                      <p>{item.city}</p>
                      <p>{item.description}</p>
                      <span>{item.duration}</span>
                    </div>
                    </a>
                  ))}
            </div>
        </section>
    );
}


export default StandUpList