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

            <div className="grid grid-flow-col relative ml-12">
              {standups.map((item) => (
                <a key={item.id} href="#" className={`flex cursor-pointer -ml-12`}>
                  <div className="relative transition-all ease-out duration-200 hover:-translate-y-12
                                  hover:z-10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="flex-1 object-cover rounded-3xl"
                    />
                    <div className="standup_card inset-0 p-4
                     flex flex-col justify-end text-white
                     hover:opacity-0 transition duration-300">
                      <h2 className="text-xl font-bold">{item.title}</h2>
                      <p>{item.city}</p>
                      <p>{item.description}</p>
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
        </section>
    );
}


export default StandUpList